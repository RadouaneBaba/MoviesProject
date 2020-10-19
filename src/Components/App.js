import React from 'react';
import '../assets/tailwind.output.css';
import Grid from './Grid';
//the movies data
const items=[
  {title:'Incredibles 2', src:'https://i.insider.com/5b23dd731ae66240008b53e7?width=700&format=jpeg&auto=webp', description:'"When Elastigirl gets recruited for a high-profile crime-fighting mission, Mr. Incredible takes on his toughest assignment ever: full-time parenting."'},
  {title:'Battle: Los Angeles', src:'https://i.insider.com/5eac597142278d15841ed2e6?width=700&format=jpeg&auto=webp', description:'"Led by their skillful staff sergeant, a platoon of gutsy Marines fights to protect all humankind from astonishingly powerful aliens."'},
  {title:'Angel Has Fallen', src:'https://i.insider.com/5eac5af457853216392b50f2?width=700&format=jpeg&auto=webp', description:'"Secret Service agent Mike Banning is caught in the crossfire when hes framed for a deadly attack on the president and forced to run for his life."'},
  {title:'Django Unchained', src:'https://i.insider.com/5eac5b39e3c3fb156703b1fc?width=700&format=jpeg&auto=webp', description:'"Accompanied by a German bounty hunter, a freed slave named Django travels across America to free his wife from a sadistic plantation owner."'},
  {title:'Despicable Me', src:'https://i.insider.com/5eac5caccdfd480fcf7027c8?width=700&format=jpeg&auto=webp', description:'"Villainous Gru hatches a plan to steal the moon from the sky. But he has a tough time staying on task after three orphans land in his care."'},
  {title:'The Willoughbys', src:'https://i.insider.com/5eac5d6c48d92c1ff540b5e5?width=700&format=jpeg&auto=webp', description:'"Four siblings with horribly selfish parents hatch a plan to get rid of them for good and form a perfectly imperfect family of their own."'},
  {title:'Extraction', src:'https://i.insider.com/5eac5dfe5f726e19dc22481c?width=700&format=jpeg&auto=webp', description:'"A hardened mercenarys mission becomes a soul-searching race to survive when hes sent into Bangladesh to rescue a drug lords kidnapped son."'},
]

const App = ()=>{
  return (
    <div className="App">
      <Grid items={items} />
    </div>
  );
}

export default App;
