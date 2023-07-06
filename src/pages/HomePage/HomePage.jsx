import { Link } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="title">Star Homes Flat Owner Association</h1>
      <div className="top-container">
        <Link to="/homeowner" className="home-card-container">
          <div className="favourite-icon">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17 7h2v2h-2zM17 11h2v2h-2zM17 15h2v2h-2zM1 11v10h6v-5h2v5h6V11L8 6l-7 5zm12 8h-2v-5H5v5H3v-7l5-3.5 5 3.5v7z"></path><path d="M10 3v1.97l2 1.43V5h9v14h-4v2h6V3z"></path></svg>
          </div>
          <Link to="/homeowner" className="button-link">
            Flat Owner
          </Link>
        </Link>
        <Link to="/flatform" className="home-card-container">
          <div className="meal-generate-icon">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z M13.0233822,13.0234994 C11.7718684,11.7594056 10.0125018,11 8,11 C4,11 1,14 1,18 L1,23 L8,23 M10,19.5 C10,20.88 11.12,22 12.5,22 C13.881,22 15,20.88 15,19.5 C15,18.119 13.881,17 12.5,17 C11.12,17 10,18.119 10,19.5 L10,19.5 Z M23,15 L20,12 L14,18 M17.5,14.5 L20.5,17.5 L17.5,14.5 Z"></path></svg>
          </div>
          <Link to="/flatform" className="button-link">
            Admin
          </Link>
        </Link>
      </div>
      <div className="container">
        <div className="announcement">
          <h2>Important Announcement</h2>
          <p>
            Official Launch of Star Homes Association for Flat Management
          </p>
        </div>
        <div className="members-list">
          <h2>Official Members</h2>
          <ul>
            <li>Ibrahim Kutty</li>
            <li>To be filled</li>
            <li>To be Filled</li>
          </ul>
        </div>
        <div className="events">
          <h2>Upcoming Events</h2>
          <ul>
            <li>General Meeting - July 10th, 2023</li>
            <li>Community Picnic - August 5th, 2023</li>
            <li>Annual Celebration - September 15th, 2023</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
