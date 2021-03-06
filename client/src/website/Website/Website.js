import React, { useEffect } from "react";
import "./Website.css";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Link } from "react-router-dom";
// import Pricing from "../Pricing/Pricing";
import Pricing from "../Pricing/Pricing";
import podcast from "../assets/podcast.png";
import MC5 from "../assets/MC5.png";
import Accordion from "../Collapsible/Accordion";
import Footer from "../Footer/Footer";

// import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import PricingPlan from "../PricingPlan/PricingPlan";

function Website(props) {
	useEffect(() => {
		const script = document.createElement("script");

		script.src = "//js.hs-scripts.com/9229836.js";
		script.async = true;

		document.body.appendChild(script);
	}, []);

	return (
		<>
			<div class="website-navbar">
				<Link
					id="wavvy-website-title"
					style={{ float: "left", fontWeight: "600" }}
					to="/"
				>
					Wavvy
				</Link>

				<Link style={{ fontWeight: "600" }} to="/register">
					Regsiter
				</Link>
				<Link style={{ fontWeight: "600" }} to="/login">
					Login
				</Link>
			</div>

			<div id="section-two">
				<h1
					style={{
						marginTop: "8rem",
						textAlign: "center",
						color: "#fff",
						// fontSize: 40,
					}}
				>
					Podcast Hosting Made Easy
				</h1>
				<p className="website-main-description">
					Wavvy allows creators to host, distribute, monetize and analyze their
					podcast.
				</p>
				<div style={{ textAlign: "center", marginTop: "1.5rem" }}>
					<PrimaryButton
						fx={() => props.history.push("/register")}
						style={{ color: "black" }}
						title="Sign Up For Free"
					/>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginTop: "2rem",
					}}
				>
					{/* <iframe
						src="https://wavvy-podcasts.herokuapp.com/episodes/1/embed-audio-player"
						width="80%"
						height="200"
						frameBorder="0"
						scrolling="no"
					></iframe> */}
					<img className="website-image" src={MC5} />
				</div>

				<h1 style={{ textAlign: "center", marginTop: "2rem", color: "#fff" }}>
					Grow Your Podcast
				</h1>
				<div class="container-two">
					<div class="row">
						<div class="column sm-3 odd">
							<div className="icon-website-container">
								<FiIcons.FiRss color="#08c803" size={40} />
							</div>
							<p className="website-text-description">
								Get an RSS feed that you can use for all major podcasting
								platforms
							</p>
						</div>

						<div class="column sm-3 even">
							<div className="icon-website-container">
								<FiIcons.FiTrendingUp color="#08c803" size={40} />
							</div>
							<p className="website-text-description">
								Access insights into your audience through analytics
							</p>
						</div>
					</div>
				</div>

				<div class="container-two">
					<div class="row">
						<div class="column sm-3 odd">
							<div className="icon-website-container">
								<FiIcons.FiPlayCircle color="#08c803" size={40} />
							</div>
							<p className="website-text-description">
								Embeddable audio player to add to your own website
							</p>
						</div>

						<div class="column sm-3 even">
							<div className="icon-website-container">
								<FiIcons.FiSettings color="#08c803" size={40} />
							</div>
							<p className="website-text-description">
								Personalized website with all your podcasting, social media, and
								support links
							</p>
						</div>
					</div>
				</div>

				<div class="container-two">
					<div class="row">
						<div class="column sm-3 odd">
							<div className="icon-website-container">
								<FiIcons.FiDollarSign color="#08c803" size={40} />
							</div>
							<p className="website-text-description">
								Monetize by accepting donations
							</p>
						</div>

						<div class="column sm-3 even">
							<div className="icon-website-container">
								<FiIcons.FiTwitter color="#08c803" size={40} />
							</div>
							<p className="website-text-description">
								Share through social media
							</p>
						</div>
					</div>
				</div>

				<h1 style={{ textAlign: "center", marginTop: "2rem", color: "#fff" }}>
					Pricing Plans
				</h1>

				<div
					className="pricing-container"
					style={{ paddingTop: "2rem", paddingBottom: "1rem" }}
				>
					{/* <Pricing /> */}
					<PricingPlan />
				</div>
				<br></br>
				<br></br>
				<h1
					style={{
						textAlign: "center",
						marginBottom: "2rem",
						color: "#fff",
						// fontSize: 40,
					}}
				>
					Frequently Asked Questions
				</h1>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginBottom: "4rem",
					}}
				>
					<Accordion />
				</div>
				{/* <!-- Calendly inline widget begin --> */}

				<Footer />
			</div>
		</>
	);
}

export default Website;
