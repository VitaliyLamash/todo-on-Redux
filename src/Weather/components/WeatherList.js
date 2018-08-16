import React from "react";
import styled from "styled-components";
import { Modal, Button, ButtonToolbar } from "react-bootstrap";

const WeatherList = ({
	list,
	isLoaded,
	modalHiden,
	changeTemp,
	typeTemp
}) => {
	if (isLoaded) {
		const { name, main, weather } = list;
		const icon = weather.map(e => e.icon);
		const date = String(new Date());
		function temp(data, type) {
			const { temp, temp_max, temp_min } = data;
			if(!type){
				return ({
					temp: (1.8 *(temp - 273.15)+32).toFixed(0),
				temp_max: (1.8 *(temp_max - 273.15)+32).toFixed(1),
				temp_min: (1.8 *(temp_min - 273.15)+32).toFixed(1)
				})
			}
			return ({
				temp: (temp - 273.15).toFixed(0),
				temp_max: (temp_max - 273.15).toFixed(1),
				temp_min: (temp_min - 273.15).toFixed(1)
			})
		};
		const obj = temp(main, typeTemp)

		return (
			<div>
				<ButtonToolbar>
					<Modal
						show={isLoaded}
						onHide={modalHiden}
						dialogClassName="custom-modal"
						bsSize="small"
					>
						<Modal.Header>
							<Modal.Title id="contained-modal-title-lg">
							<Wrap>
								DAY FORECAST
								<Check type='checkbox' onClick={changeTemp} />
							</Wrap>
							</Modal.Title>
						
						</Modal.Header>
						<Modal.Body>
							<Body>
								<Title>{name}</Title>
								<DateToDay>{date.substring(0, 15)}</DateToDay>
								<Image src={`https://openweathermap.org/img/w/${icon[0]}.png`} />
								<TempNow>{`${obj.temp}`}</TempNow>
								<OtherTemp>{`max: ${(obj.temp_max)}  min: ${(obj.temp_min)}`}</OtherTemp>
							</Body>
							<Modal.Footer>
								<Button onClick={modalHiden} bsStyle="primary">
									Close
								</Button>
							</Modal.Footer>
						</Modal.Body>
					</Modal>
				</ButtonToolbar>
			</div>
		);
	};

	return null;
};

export default WeatherList;

const Body = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const DateToDay = styled.div`
font-weight: 700;
margin-bottom: 5px;
`;
const TempNow = styled.div`
font-size: 90px;
font-weight: 600;
margin-bottom: 10px;
`;

const OtherTemp = styled.div`
font-size: 25px;
font-weight: 700;
margin-bottom: 15px;
`;
const Title = styled.div`
display: flex;
font-size: 35px;
font-weight: 700;
margin-bottom: 10px;

`;


const Image = styled.img`
height: 150px;
width: 150px;
`;



const Wrap = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
`;
const Check = styled.input`
margin-left: auto;
`