import "./style.css";
import { useState } from "react";
import { currencys } from "../currencys";
import { Result } from "./Result"
import { Clock } from "./Clock"

export const Form = ({ result, calculateResult }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencys[0].short);

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <fieldset className="form__fildset">
                <legend className="form__legend">Przelicznik walut</legend>
               <p><Clock/></p> 
                <p>
                    <label>
                        <span className="form__labelText">Wpisz kwotę w PLN*:</span>
                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            placeholder="Wpisz kwotę w PLN"
                            className="form__label"
                            type="number"
                            required
                            min="1" />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Wybierz walutę:</span>
                        <select
                            className="form__label"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}>
                            {currencys.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}</option>
                            )))}
                        </select>
                    </label>
                </p>
                <p><span className="form__annotation">Pola oznaczone * nie mogą być puste.</span>
                </p>
                <p>
                    <button className="form__button">Przelicz kurs</button>
                </p>
                <Result result={result} />
            </fieldset>
        </form>
    )
}
