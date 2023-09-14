// TODO: Descomentar el codigo de mas abajo y su import ConstructorScore from '../../api/responses/constructors-score.json';
// TODO: en caso de alcanzar el limite de request de la API (250 requests/mes)
//import ConstructorScore from '../../api/responses/constructors-score.json'

import React from 'react'
import PropTypes from 'prop-types'
import s from './particule/style.module.css'

const ConstructorScoreTable = ({ ConstructorScore }) => {
    //console.log(ConstructorScore)
    return (
        <div className={s.main_container}>
            <h1 className={s.h1}>{ConstructorScore.meta.title}</h1>
            <table className={s.table}>
                <thead>
                    <tr>
                        <th className={s.positions}>#</th>
                        <th>Team name</th>
                        <th className={s.points}>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {ConstructorScore.results.map((constructor, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td className={s.positions}>
                                    {constructor.position}
                                </td>
                                <td>{constructor.team_name}</td>
                                <td className={s.points}>
                                    {constructor.points}
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

// const ConstructorScoreTable = () => {
//     console.log(ConstructorScore)
//     return (
//         <div className={s.main_container}>
//             <h1 className={s.h1}>{ConstructorScore.meta.title}</h1>
//             <table className={s.table}>
//                 <thead>
//                     <tr>
//                         <th className={s.positions}>#</th>
//                         <th>Team name</th>
//                         <th className={s.points}>Points</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {ConstructorScore.results.map((constructor, index) => (
//                         <React.Fragment key={index}>
//                             <tr>
//                                 <td className={s.positions}>
//                                     {constructor.position}
//                                 </td>
//                                 <td>{constructor.team_name}</td>
//                                 <td className={s.points}>
//                                     {constructor.points}
//                                 </td>
//                             </tr>
//                         </React.Fragment>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

ConstructorScoreTable.propTypes = {
    ConstructorScore: PropTypes.object,
}

export default ConstructorScoreTable
