type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
    time: string;
  }
}

const Results = (props: ResultsPropsType) => {
  return (
    <div>
      {props.results.country && <div className="results-country">{props.results.country}</div>}
      {props.results.cityName && <div className="results-city">{props.results.cityName}</div>}
      {props.results.temperature && <div className="results-temp">{props.results.temperature} <span>°C</span></div>}
      {props.results.conditionText && 
        <div className="results-condition">
          <img src={props.results.icon} alt="icon"/>
          <span>{props.results.conditionText}</span>
        </div>
      }
      {props.results.time && 
        <div className="results-time">
          <span>{props.results.cityName}の時刻：</span>{props.results.time}
        </div>}
    </div>
  );
};

export default Results;