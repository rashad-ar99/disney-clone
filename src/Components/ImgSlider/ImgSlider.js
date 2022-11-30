import React, { useState } from "react";
import styled from "styled-components";
import "./ImgSlider.css";
import { Carousel } from "react-bootstrap";

function ImgSlider() {
	const [seeControls, setSeeControls] = useState(false);

	return (
		<Slider>
			<Carousel
				interval={3000}
				pause="hover"
				// variant="dark"
				controls={seeControls}
				onMouseOver={() => setSeeControls(true)}
				onMouseLeave={() => setSeeControls(false)}
			>
				<Carousel.Item>
					<Wrap>
						<a href="/">
							<img src="/assets/images/slider-badag.jpg" alt="carousel_1" />
						</a>
					</Wrap>
				</Carousel.Item>
				<Carousel.Item>
					<Wrap>
						<a href="/">
							<img src="/assets/images/slider-badging.jpg" alt="carousel_2" />
						</a>
					</Wrap>
				</Carousel.Item>
				<Carousel.Item>
					<Wrap>
						<a href="/">
							<img src="/assets/images/slider-scale.jpg" alt="carousel_3" />
						</a>
					</Wrap>
				</Carousel.Item>
				<Carousel.Item>
					<Wrap>
						<a href="/">
							<img src="/assets/images/slider-scales.jpg" alt="carousel_4" />
						</a>
					</Wrap>
				</Carousel.Item>
			</Carousel>
		</Slider>
	);
}

const Slider = styled.div`
	margin-top: 20px;
`;

const Wrap = styled.div`
	border-radius: 4px;
	cursor: pointer;
	position: relative;
	a {
		border-radius: 4px;
		box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
			rgb(0 0 0 / 73%) 0px 16px 10px -10px;
		cursor: pointer;
		display: block;
		position: relative;
		padding: 4px;
		img {
			width: 100%;
			height: 100%;
		}
		&:hover {
			padding: 0;
			border: 4px solid rgba(249, 249, 249, 0.8);
			transition-duration: 300ms;
		}
	}
`;

export default ImgSlider;
