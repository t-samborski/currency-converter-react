import {Forms, Fieldset, Legend, Header, Amount, Currency, Annotation, Button} from "./styled";
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
        <Forms onSubmit={onSubmit}>
            <Fieldset>
                <Legend>Przelicznik walut</Legend>
               <p><Clock/></p> 
                <p>
                    <label>
                        <Header>Wpisz kwotę w PLN*:</Header>
                        <Amount
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            placeholder="Wpisz kwotę w PLN"
                            type="number"
                            required
                            min="1" />
                    </label>
                </p>
                <p>
                    <label>
                        <Header>Wybierz walutę:</Header>
                        <Currency
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}>
                            {currencys.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}</option>
                            )))}
                        </Currency>
                    </label>
                </p>
                <p><Annotation>Pola oznaczone * nie mogą być puste.</Annotation>
                </p>
                <p>
                    <Button>Przelicz kurs</Button>
                </p>
                <Result result={result} />
            </Fieldset>
        </Forms>
    )
}
