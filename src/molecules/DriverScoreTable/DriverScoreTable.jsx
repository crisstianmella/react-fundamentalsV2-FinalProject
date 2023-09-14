// TODO: Descomentar el codigo de mas abajo y su import DriverScore from '../../api/responses/drivers-score.json';
// TODO: en caso de alcanzar el limite de request de la API (250 requests/mes)
//import DriverScore from '../../api/responses/drivers-score.json'

import React from 'react'
import PropTypes from 'prop-types'
import s from './particule/style.module.css'

const DriverScoreTable = ({ DriverScore }) => {
    // console.log(DriverScore.results.length)
    return (
        <div className={s.main_container}>
            <h1 className={s.h1}>{DriverScore.meta.title}</h1>
            <table className={s.table}>
                <thead>
                    <tr>
                        <th className={s.positions}>#</th>
                        <th>Driver name</th>
                        <th>Team name</th>
                        <th>Nationality</th>
                        <th className={s.points}>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {DriverScore.results.map((driver, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td className={s.positions}>
                                    {driver.position}
                                </td>
                                <td>{driver.driver_name}</td>
                                <td>{driver.team_name}</td>
                                <td>{driver.nationality}</td>
                                <td className={s.points}>{driver.points}</td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
            <br />
        </div>
    )
}

// const DriverScoreTable = () => {
//     return (
//         <div className={s.main_container}>
//             <h1 className={s.h1}>{DriverScore.meta.title}</h1>
//             <table className={s.table}>
//                 <thead>
//                     <tr>
//                         <th className={s.positions}>#</th>
//                         <th>Driver name</th>
//                         <th>Team name</th>
//                         <th>Nationality</th>
//                         <th className={s.points}>Points</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {DriverScore.results.map((driver, index) => (
//                         <React.Fragment key={index}>
//                             <tr>
//                                 <td className={s.positions}>
//                                     {driver.position}
//                                 </td>
//                                 <td>{driver.driver_name}</td>
//                                 <td>{driver.team_name}</td>
//                                 <td>{driver.nationality}</td>
//                                 <td className={s.points}>{driver.points}</td>
//                             </tr>
//                         </React.Fragment>
//                     ))}
//                 </tbody>
//             </table>
//             <br />
//         </div>
//     )
// }

DriverScoreTable.propTypes = {
    DriverScore: PropTypes.object,
}

export default DriverScoreTable
