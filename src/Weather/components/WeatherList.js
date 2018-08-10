import React from "react";
import { Modal, Button, ButtonToolbar } from "react-bootstrap";

const WeatherList = ({
	list,
	isLoaded,
	modalHiden
}) => {
	if (isLoaded) {
		const { name, main, weather } = list;
		const icon = weather.map(e => e.icon);
		return (
			<div>
				<ButtonToolbar>
					<Modal
						{...this.props}
						show={isLoaded}
						onHide={modalHiden}
						dialogClassName="custom-modal"
					>
						<Modal.Header>
							<Modal.Title id="contained-modal-title-lg">
								Weather Modal
			  </Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<p>{name}</p>
							<img src={`https://openweathermap.org/img/w/${icon[0]}.png`} />
							<p>{`Temp_now ${(main.temp - 273.15).toFixed(2)}`}</p>
							<p>{`temp_max ${(main.temp_max - 273.15).toFixed(2)}`}</p>
							<p>{`temp_min ${(main.temp_min - 273.15).toFixed(2)}`}</p>
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
