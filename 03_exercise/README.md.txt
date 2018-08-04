
# Class exercise:

Use this json array:
```json
[{"flag":"https://restcountries.eu/data/bdi.svg","name":"Burundi"},{"flag":"https://restcountries.eu/data/chl.svg","name":"Chile"},{"flag":"https://restcountries.eu/data/chn.svg","name":"China"},{"flag":"https://restcountries.eu/data/col.svg","name":"Colombia"},{"flag":"https://restcountries.eu/data/geo.svg","name":"Georgia"},{"flag":"https://restcountries.eu/data/deu.svg","name":"Germany"},{"flag":"https://restcountries.eu/data/gib.svg","name":"Gibraltar"},{"flag":"https://restcountries.eu/data/grc.svg","name":"Greece"},{"flag":"https://restcountries.eu/data/hkg.svg","name":"Hong Kong"},{"flag":"https://restcountries.eu/data/isl.svg","name":"Iceland"},{"flag":"https://restcountries.eu/data/ind.svg","name":"India"},{"flag":"https://restcountries.eu/data/irl.svg","name":"Ireland"},{"flag":"https://restcountries.eu/data/isr.svg","name":"Israel"}]
```


Create a `App` commponent (state componet) 
<br>
The `App` commponent - with 13 buttons - each button will show a countrey name from the json array
<br>
And another button that allows the user to choose the option "international".
<br>
Every time a user presses a button, show him a popup to ask whether he is confident of the change.
<br>
If the user has regretted, the choice should be ignored. Otherwise:
* If the user chose a country - show him a `Country` component that displays the country he selected
<br>
(The Component will present the chosen countryName and the flag of that country)
*  If the user chose "international" - show him a `International` (stateless) component that displays a link to:
<br>
"https://en.wikipedia.org/wiki/International"
<br>
