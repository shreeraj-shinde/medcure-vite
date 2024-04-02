import AppSidebar from "../Components/AppSidebar"

const Layout = (Component : any) => ({...props}) => {
  return (
    <main className="fullContainer">
    <AppSidebar />
    <section className="overflow-auto">
      <Component {...props}/>
    </section>
  </main>
  )
}

export default Layout