// TODO: Descomentar el codigo de mas abajo y su import RacesCalendar from '../../api/responses/races-calendar.json';
// TODO: en caso de alcanzar el limite de request de la API (250 requests/mes)
//import RacesCalendar from '../../api/responses/races-calendar.json'
import PropTypes from 'prop-types'
import s from './particule/style.module.css'

const RaceCalendar = ({ RacesCalendar }) => {
    //console.log(RacesCalendar)
    return (
        <div className={s.main_container}>
            <h1>{RacesCalendar.meta.title}</h1>
            <div className={s.square_colors}>
                <p className={s.square_green}></p>
                <h3>Finished Race</h3>
                <p className={s.square_blue}></p>
                <h3>Next Race</h3>
                <p className={s.square_red}></p>
                <h3>Postponed Race</h3>
            </div>

            <div className={s.cardContainer}>
                {RacesCalendar.results.map((race, index) => (
                    <div
                        key={index}
                        className={s.card}
                        style={{
                            backgroundColor:
                                race.status === 'Complete'
                                    ? '#3cf54bc7'
                                    : race.status === 'Confirmed'
                                    ? '#3c8cf5c7'
                                    : '#dd2c0dc7',
                        }}
                    >
                        <h2 className={s.name}>{race.name}</h2>
                        <p className={s.country}>Country: {race.country}</p>
                        <p className={s.start_date}>
                            Start-date: {race.start_date}
                        </p>
                        <p className={s.end_date}>End-date: {race.end_date}</p>
                        <p className={s.track}>Track: {race.track}</p>
                        <p className={s.status}>Status: {race.status}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

// const RaceCalendar = () => {
//     console.log(RacesCalendar)
//     return (
//         <div className={s.main_container}>
//             <h1>{RacesCalendar.meta.title}</h1>
//             <div className={s.square_colors}>
//                 <p className={s.square_green}></p>
//                 <h3>Finished Race</h3>
//                 <p className={s.square_blue}></p>
//                 <h3>Next Race</h3>
//                 <p className={s.square_red}></p>
//                 <h3>Postponed Race</h3>
//             </div>

//             <div className={s.cardContainer}>
//                 {RacesCalendar.results.map((race, index) => (
//                     <div
//                         key={index}
//                         className={s.card}
//                         style={{
//                             backgroundColor:
//                                 race.status === 'Complete'
//                                     ? '#3cf54bc7'
//                                     : race.status === 'Confirmed'
//                                     ? '#3c8cf5c7'
//                                     : '#dd2c0dc7',
//                         }}
//                     >
//                         <h2 className={s.name}>{race.name}</h2>
//                         <p className={s.country}>Country: {race.country}</p>
//                         <p className={s.start_date}>
//                             Start-date: {race.start_date}
//                         </p>
//                         <p className={s.end_date}>End-date: {race.end_date}</p>
//                         <p className={s.track}>Track: {race.track}</p>
//                         <p className={s.status}>Status: {race.status}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

RaceCalendar.propTypes = {
    RacesCalendar: PropTypes.object,
}

export default RaceCalendar
