## Написати апликацију која приказује лансирања SpaceX-a

https://github.com/r-spacex/SpaceX-API/blob/master/docs/README.md

     Користити v4 верзију
     

1. Приказивање свих лансирања
    - Компонента Launches (за сва лансирања)
    - Компонента Launch (за једно лансирање)
        - Назив
        - Слика (која год)
        - Датум (static_fire_date_unix) - Приказати га у читљивом формату

2. Select којим се бира колико лансирања је приказано
    - Подразумевано ALL (почетно стање апликације)
    - Опције: 10, 20, 50
    - onChange се мења број приказаних лансирања

3. Кликом на лансирање, приказују се додатне информације о истом
    - Назив ракете (id ракете имате у објекту лансирања)
    - Информацију да ли је та ракета активна или није

```
Напомене:
 Задатак 1: Датум оставите за крај
 Задатак 2: Може без Select-a (дугмићи или шта год друго) за 70% поена
Подразумевано да ради исто
 Задатак 3: Може се направити и дугме за свако ласнирање
 ```