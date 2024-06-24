import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import Navbar from "../Components/Navbar";
import { useAppSelector } from "../hooks/hooks";
import axios from "axios";
import { ExerciseOptions } from "../utils/fetchExerciseData";

const ExerciseDetail = () => {
  const { name } = useAppSelector((state) => state.user);
  const { id } = useParams();

  const [exercise, setExercise] = useState({});
  const [secondaryMuscles, setSecondaryMuscules] = useState([""]);
  const [instructions, setInstruction] = useState([""]);
  const [youtubeVideo, setYoutubeVideo] = useState([]);

  useEffect(() => {
    const fetchExerciseById = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_RAPID_API_URL}/exercise/${id}`,
        ExerciseOptions
      );

      setSecondaryMuscules(data.secondaryMuscles);
      setInstruction(data.instructions);
      setExercise(data);
      return data;
    };

    const fetchYoutubeVideo = async () => {
      const exeName = await fetchExerciseById();

      const { data } = await axios.get(import.meta.env.VITE_YOUTUBE_URL, {
        params: {
          query: exeName.name,
          hl: "en",
        },
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_YOUTUBE_KEY,
          "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
        },
      });
      setYoutubeVideo(data.contents);
      console.log(data);
    };
    fetchYoutubeVideo();
  }, []);

  return (
    <main className="max-h-screen">
      <Navbar username={name} title="Exercise Details" input={false} />
      <section className="bg-white rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 p-4">
          <div className="md:border-r-2">
            <h3 className="font-semibold text-xl capitalize pl-4">
              {exercise.name}
            </h3>

            <img src={exercise.gifUrl} alt="exercise Img Url" />
          </div>

          <div className="pl-4">
            <h3 className="font-semibold text-xl capitalize mb-2">Target</h3>
            <span className="px-2 py-1 bg-violet-400 mr-4 mt-4 rounded-lg capitalize font-semibold">
              {exercise.target}
            </span>
            <br />
            <br />

            <h3 className="font-semibold text-xl capitalize mb-2">
              Secondary Muscles
            </h3>
            {secondaryMuscles.map((item: string, idx: number) => (
              <span
                key={idx}
                className="px-2 py-1 bg-amber-200 mr-4 mt-4 rounded-lg capitalize font-semibold"
              >
                {item}
              </span>
            ))}
            <br />
            <br />
            <h3 className="font-semibold text-xl capitalize mb-2">
              Instructions
            </h3>
            <ol className="list-decimal pl-4 pr-4 pb-4">
              {instructions.map((ins, idx) => (
                <li className="text-md font-semibold text-justify" key={idx}>
                  {ins}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <section className="bg-white rounded-lg mt-2 p-4">
        <h3 className="font-semibold text-xl capitalize mb-2">
          Exercise Videos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {youtubeVideo &&
            youtubeVideo.slice(0, 3).map((vid, idx) => (
              <a
                key={idx}
                href={`https://www.youtube.com/watch?v=${vid.video.videoId}`}
                target="_blank"
                rel="norefferrer"
                className="p-2 bg-blue-100 rounded-lg"
              >
                <img
                  src={vid.video.thumbnails[0].url}
                  alt="Thumbnails"
                  className="rounded-lg"
                />

                <h3 className="font-semibold capitalize mt-2">
                  {vid.video.title}
                </h3>
              </a>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Layout(ExerciseDetail);
