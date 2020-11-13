import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class PageViewBody extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let data = [];
		for (let i = 0; i < 10; ++i) {
			data.push({ id: i });
		}
		const renderData = data.map((d) => (
			<span key={d.id}>
				<hr
					className="horizRule mb-5 mt-4 px-0 mx-0"
					style={styles.horizRule}
				/>
				<Row className="m-2">
					<Col xs="12" lg="1" className="px-0 text-lg-center">
						<img
							src="/images/Ellipse2.png"
							style={styles.avatar}
							className="mb-2"
						/>
					</Col>
					<Col className="px-0">
						<h4>My Father Patrick McCarthy's Garden</h4>
						<h6>Posted By: Maria McCarthy</h6>
						<h6>Date posted: June 10, 2020</h6>
						<h6 className="mb-4">Memories | Folklore | Father</h6>
					</Col>
				</Row>
				<Row className="ml-2 mr-5">
					<Col xs="12" lg="11" className="px-0 offset-lg-1">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Vivamus velit ligula, vehicula eu egestas at,
							bibendum eget ligula. Mauris vehicula mattis
							ultrices. Nulla auctor risus nulla, quis dictum
							nulla semper nec. Curabitur nec orci ex. Integer
							viverra augue odio, nec consequat nisl tincidunt sit
							amet. Pellentesque ac lacus pulvinar, condimentum
							orci sed, varius nibh. Phasellus ac ligula a massa
							ultrices dapibus. Pellentesque condimentum a purus
							nec vehicula. Ut ac massa pulvinar, ullamcorper
							libero id, suscipit risus. Maecenas volutpat
							consectetur sapien, sed convallis sem hendrerit
							porta. Morbi pharetra elit et nibh luctus eleifend.
							Suspendisse et pellentesque enim.
						</p>
						<p>
							Sed lectus leo, interdum in vestibulum sit amet,
							elementum sed ipsum. Praesent volutpat turpis nec
							enim malesuada, at volutpat lorem sagittis. Integer
							sit amet enim dolor. Class aptent taciti sociosqu ad
							litora torquent per conubia nostra, per inceptos
							himenaeos. Curabitur faucibus nibh ac dolor
							pulvinar, non ullamcorper ex vulputate. Suspendisse
							aliquam eu sapien id laoreet. Maecenas vitae arcu
							justo.
						</p>
						<p>
							Praesent nisl est, sagittis quis tempor non,
							pellentesque at urna. Proin pharetra gravida
							rhoncus. Curabitur fermentum sem eget tortor
							porttitor, non aliquam erat elementum. Pellentesque
							habitant morbi tristique senectus et netus et
							malesuada fames ac turpis egestas. Quisque dignissim
							convallis urna ac hendrerit. Donec viverra tincidunt
							nisi, in dapibus dui scelerisque nec. Proin gravida
							odio sit amet quam rutrum, sed imperdiet leo rutrum.
							Integer eu mattis urna.
						</p>
					</Col>
				</Row>
			</span>
		));
		return <React.Fragment>{renderData}</React.Fragment>;
	}
}

const styles = {
	search: {
		paddingBottom: "100px",
	},
	horizRule: {
		borderBottom: "2px solid black",
		marginBottom: "50px",
	},
	avatar: {
		// width: "105px",
		width: "clamp(10px, 100%, 105px)",
		// float: "none",
		// marginLeft: "auto",
		// marginRight: "auto"
		// textAlign: "center",
		// display: "block",
		// marginRight: "auto",
		// paddingLeft: "10px"
	},
	horizRule: {
		position: "relative",
		left: "-15px",
		// right: "15px",
		width: "calc(100% + 30px)",
		borderTop: "1px solid rgba(0,0,0,.3)",
		zIndex: "9999",
	},
};

export default PageViewBody;
