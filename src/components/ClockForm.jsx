import { useEffect } from "react";

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  Row,
  Col
} from 'antd';

import "antd/dist/antd.css";
import "../App.css"

export default function CLockForm({ clockProps, setClockProps }) {

  useEffect(() => {
    console.log(clockProps)
  }, [clockProps])
  
  const handleChange = (e) => {
    setClockProps({...clockProps, [e.target.name]: parseInt(e.target.value)});
  }
  const handleHourChange = (e) => { 
    const hours = [2, 1, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9, 8, 8, 7, 7, 8, 8, 6, 5, 4, 3]
    setClockProps({ ...clockProps, hora: hours[parseInt(e.target.value)] });

  }

  return (
    <>
    <div className="container">
      <div className="containersecondary">
      <Form height="50%">
        <Row gutter={30}>
          <Col className="gutter-row" span={12}>
          <Form.Item>
          <h3>Estado de Check-in</h3>
          <Radio.Group onChange={handleChange} name="checkin">
            <Radio value={0} name="checkin">
              {" "}
              Si{" "}
            </Radio>
            <Radio value={1} name="checkin">
              {" "}
              No{" "}
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <h3>Tipo de vuelo</h3>
          <Radio.Group onChange={handleChange} name="vuelo">
            <Radio value="1" name="vuelo">
              {" "}
              Nacional{" "}
            </Radio>
            <Radio value="2" name="vuelo">
              {" "}
              Internacional{" "}
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item onChange={handleHourChange} name="hora">
          <h3>Hora de llegada</h3>
          <Input
            id="hora"
            type="number"
            name="hora"
            min="0"
            max="24"
            placeholder="Ej. 1, 2, 4, 24"
            onChange={handleHourChange}
          />
        </Form.Item>

        <Form.Item onChange={handleChange}>
          <h3>Cantidad de maletas</h3>
          <Input
            id="maletas"
            type="number"
            name="registro"
            min="0"
            placeholder="Ej. 1, 2, 4, 24"
          />
        </Form.Item>

          </Col>
          <Col className="gutter-row" span={12}>
          <Form.Item>
          <h3>Necesita sellar equipaje</h3>
          <Radio.Group name="sellar" onChange={handleChange}>
            <Radio value="1"> Si </Radio>
            <Radio value="0" name="sellar" onChange={handleChange}>
              {" "}
              No{" "}
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <h3>Temporada</h3>
          <Radio.Group name="temporada" onChange={handleChange}>
            <Radio value="0" name="temporada" onChange={handleChange}>
              {" "}
              Baja{" "}
            </Radio>
            <Radio value="1"> Alta </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item onChange={handleChange}>
          <h3>Experiencia en vuelos</h3>
          <Input
            id="experiencia"
            type="number"
            name="experiencia"
            min="0"
            placeholder="Ej. 1, 2, 4, 24"
          />
        </Form.Item>

        <Form.Item>
          <h3>Equipaje especial</h3>
          <Radio.Group name="equipajeEspecial" onChange={handleChange}>
            <Radio value="1" name="equipajeEspecial" onChange={handleChange}>
              {" "}
              Si{" "}
            </Radio>
            <Radio value="0" name="equipajeEspecial" onChange={handleChange}>
              {" "}
              No{" "}
            </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <h3>Acompañantes</h3>
          <Input
            id="acompanantes"
            type="number"
            name="acompanantes"
            min="0"
            placeholder="Ej. 1, 2, 4, 24"
            onChange={handleChange}
          />
        </Form.Item>

          </Col>
        </Row>





      </Form>
      </div>
    </div>
    </>
  );
}
