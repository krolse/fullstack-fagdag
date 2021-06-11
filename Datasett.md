# Utdrag av Beskrivelse

## Generelt
* Nedenfor finnes utdrag fra [beskrivelsen av datasettet](https://data.norge.no/datasets/288aa74c-e3d3-492e-9ede-e71503b3bfd9).

* Et tilsynsobjekt er et sted hvor det foregår aktivitet som Mattilsynet skal føre tilsyn med (for smilefjesordningen er dette serveringssteder som er tilrettelagt og beregnet for at maten skal spises på stedet). Et tilsynsobjekt identifiseres entydig ved en intern id, kalt `tilsynsobjektid`

## Karakterskala
* `0` = Ingen brudd på regelverket funnet. Stort smil.
* `1` = Mindre brudd på regelverket som ikke krever oppfølging. Stort smil.
* `2` = Brudd på regelverket som krever oppfølging. Strekmunn.
* `3` = Alvorlig brudd på regelverket. Sur munn.
* `4` = Ikke aktuelt - Virksomheten har ikke denne aktiviteten ved tilsynsobjektet. Påvirker ikke smilefjeskarakter.
* `5` = Ikke vurdert - Mattilsynet har ikke vurdert kravpunktet ved dette tilsynet. Påvirker ikke smilefjeskarakter.

### Karaktersetting

* Det totale smilefjesymbolet etter et tilsyn tilsvarer den dårligste karakteren som blir gitt på tilsynet.

* Karakter for hvert tema er den dårligste karakteren gitt til kravpunkter under tema. 

* Hvert enkelt kravpunkt gis karakterer på skalaen.


## Utvalgte datafelter

* `tilsynsobjektid`: Nøkkel for å identifisere tilsynsobjektet orgnummer

* `navn`: Navnet på tilsynsobjektet

* `tilsynid`: Nøkkel for å identifisere tilsynet

* `sakref`: Referansenummer for arkivinformasjon status

* `status`: Gjennomføres = utestående avvik finnes. Gjennomført = alle avvik lukket.

* `dato`: Dato tilsynet er utført (ddmmyyyy)

* `karakter`: Smilefjeskarakter for hele tilsynet

* `tilsynsbesoektype`: Ordinært eller oppfølgings -tilsyn

* `tilsynid`: Nøkkel for identifisere ett tilsyn


### Kravpunkter

* [Dette datasettet inneholder hvert enkelt kravpunkt som inngår i ett tilsyn](http://hotell.difi.no/?dataset=mattilsynet/smilefjes/kravpunkter) 


## Invalidering av data

* Dersom Mattilsynet ikke overholder sine forpliktelser i smilefjesforskriften, eller et påklaget vedtak gis medhold, vil tilsynet og tilsynsresultatet bli trukket tilbake fra åpne data.

* Informasjonen om dette tilsynet vil ikke lenger være ansett som korrekt. Det er derfor viktig at brukere av datasettet er klar over dette slik at de kan holde sine data oppdatert (1 gang pr. døgn) for å unngå publisering av feilaktig informasjon om et tilsynsobjekt
