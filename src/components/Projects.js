import React from "react"
import PaletteIcon from "./color-palette.png"
import RoadTripIcon from "./road-trip.png"

const styles = {
	icon: { height: "24px", width: "24px", marginRight: "10px" }
}

const Projects = () => {
	return (
		<div className="ui stackable raised cards">
			<div className="ui centered card">
				<div className="content">
					<div className="header">
						<img src={PaletteIcon} style={styles.icon} />
						Colorati
					</div>
					<div className="left aligned description">
						A web app for creating your own color palettes built entirely using
						React.
					</div>
				</div>
				<div className="extra content">
					<div className="ui two buttons">
						<a
							className="ui basic blue button"
							href="https://github.com/flashkicker/colorati"
							target="_blank"
							rel="noopener noreferrer"
						>
							Github
						</a>
						<a
							className="ui basic black button"
							href="https://colorati.herokuapp.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Demo
						</a>
					</div>
				</div>
			</div>
			<div className="ui centered card">
				<div className="content">
					<div className="header">
						<img src={RoadTripIcon} style={styles.icon} />
						Trippr
					</div>
					<div className="left aligned description">
						A web app built on the MERN stack that lets you create, view, save
						and share your personalized road trips.
					</div>
				</div>
				<div className="extra content">
					<div className="ui two buttons">
						<a
							className="ui basic blue button"
							href="https://github.com/flashkicker/Trippr"
							target="_blank"
							rel="noopener noreferrer"
						>
							Github
						</a>
						<a
							className="ui basic black button"
							href="https://calm-badlands-76250.herokuapp.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Demo
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects