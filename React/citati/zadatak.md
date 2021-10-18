## Напомена: Проћи кроз сваки задатак редом, не радити унапред (користити код од претходних задатака)

1. Направити апликацију која исписује најлепше цитате:
    - Цитати су представљени као низ стрингова

*Напомена* : Цитате прослеђујемо App-у кроз props, иначе бисмо узимали информације са неког сервера
```js
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({ citati }) => {
  const [selected, setSelected] = useState(0) // Селектован је нулти цитат

  return (
    <div>
      {citati[selected]}  {/* Приказујемо селектован цитат */}
 
    </div>
  )
}

const citati = [
  'I\'m not dumb. I just have a command of thoroughly useless information.',
  'Чудно је како је мало потребно да будемо срећни, и још чудније: како нам често баш то мало недостаје!',
  'Што не боли – то није живот, што не пролази – то није срећа',
  'Звезданог неба и људског срца никад се човек неће моћи нагледати',
  'Be yourself; everyone else is already taken.',
  'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
  'If you tell the truth, you don\'t have to remember anything.',
  'Insanity is doing the same thing, over and over again, but expecting different results.',
  'A day without sunshine is like, you know, night.'
]

ReactDOM.render(
    <React.StrictMode>
        <App citati={citati}/>
    </React.StrictMode>,
    document.getElementById('root')
)
```


2. Преправити апликацију тако да исписује само први цитат, а постоји дугме на које се цитати мењају (редом)

3. Додати могућност да се гласа за одређени цитат (тј онај који је тренутно приказан)
    - Испод цитата исписати број гласова, и дугме којим се повећава тај број
    - Напомена: овај број гласова треба чувати негде

4. Испод тренутног цитата, исписати и цитат са највише гласова (И број оцена које има)
    - Ако више цитата има исто оцена, довољно је приказати било који