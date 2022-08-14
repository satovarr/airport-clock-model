import { useState } from "react";
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
} from 'antd';

export default function CLockForm({ clockPRops, setClockProps }) {
  
  const handleChange = (e) => {
    console.log(e.target.value, e.target.name);
  }

  return (
    <div>
      <form action="">
        <h3>Estado de Check-in</h3>
        <label htmlFor="checkinsi">
          {" "}
          Sí
          <input
            type="radio"
            id="checkinsi"
            name="checkin"
            value="0"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="checkinno">
          {" "}
          No
          <input
            type="radio"
            id="checkinno"
            name="checkin"
            value="1"
            onChange={handleChange}
          />
        </label>
        <h3>Tipo de vuelo</h3>
        <label htmlFor="nacional">
          {" "}
          Nacional
          <input
            type="radio"
            id="nacional"
            name="vuelo"
            value="nacional"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="internacional">
          {" "}
          Internacional
          <input
            type="radio"
            id="internacional"
            name="vuelo"
            value="internacional"
            onChange={handleChange}
          />
        </label>
        <h3>Hora de llegada</h3>
        <input
          type="text"
          id="hora"
          name="hora"
          value=""
          placeholder="Ej. 1, 2, 4, 24"
          onChange={handleChange}
        />
        <h3>Cantidad de maletas</h3>
        <input
          type="number"
          id="maletas"
          name="maletas"
          min="0"
          onChange={handleChange}
        />
        <h3>Necesita sellar equipaje</h3>
        <label htmlFor="sellarsi">
          {" "}
          Sí
          <input
            type="radio"
            id="sellarsi"
            name="sellar"
            value="si"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="sellarno">
          {" "}
          No
          <input
            type="radio"
            id="sellarno"
            name="sellar"
            value="no"
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}
