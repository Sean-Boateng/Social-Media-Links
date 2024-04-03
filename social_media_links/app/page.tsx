import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="rectangle">
        <div style={{display:'flex', justifyContent:'center'}}>
          <img src="avatar-jessica.jpeg" alt="" className="pic"/>
        </div>
        <div>
          <p className="name">
            Jessica Randall
          </p>
          <p className="location">
            London,United Kingdom
          </p>
        </div>
        <div className="bio">
          "Front-end developer and avid reader."
        </div>
        <div className="button-container">
          <a href={process.env.API_Github} className="green-hover button">GitHub</a>
          <a href={process.env.API_FMentor} className="green-hover button">Frontend Mentor</a>
          <a href={process.env.API_LinkedIn} className="green-hover button">LinkedIn</a>
          <a href={process.env.API_Twitter} className="green-hover button">Twitter</a>
          <a href={process.env.API_Insta} className="green-hover button">Instagram</a>
        </div>
      </div>
    </main>
  );
}
