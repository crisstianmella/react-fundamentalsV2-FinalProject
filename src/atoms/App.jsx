import { useState, useEffect, useCallback, useMemo } from 'react'
import { Routes, Link, Route } from 'react-router-dom'
import DriverScoreTable from '../molecules/DriverScoreTable/DriverScoreTable'
import ConstructorScoreTable from '../molecules/ConstructorScoreTable/ConstructorScoreTable'
import RaceCalendar from '../molecules/RaceCalendar/RaceCalendar'
import { F1Api } from '../api/f1-api'
import s from './particule/style.module.css'

function App() {
    const [year, setYear] = useState(2023)
    const [menu, setMenu] = useState('')
    const [dataDS, setDataDS] = useState()
    const [dataCS, setDataCS] = useState()
    const [dataRC, setDataRC] = useState()

    const handleButtonClick = (event) => {
        const buttonValue = event.target.value
        setYear(buttonValue)
    }
    const handleMenuClick = (value) => {
        setMenu(value)
    }
    const showButtons = location.pathname !== '/race-calendar'

    const fetchDriverScore = useCallback(async (year) => {
        const driverScore = await F1Api.fetchDriverStanding(year)
        if (driverScore.length > 0) {
            setDataDS(driverScore[0])
        }
    }, [])

    async function fetchConstructorScore(year) {
        const constructorScore = await F1Api.fetchConstructorStanding(year)
        if (constructorScore.length > 0) {
            setDataCS(constructorScore[0])
        }
    }

    // eslint-disable-next-line no-unused-vars
    const fetchRaceCalendar = useMemo(async () => {
        const year = 2023
        const raceCalendar = await F1Api.fetchRaceCalendar(year)
        if (raceCalendar.length > 0) {
            setDataRC(raceCalendar[0])
        }
    }, [])

    useEffect(() => {
        if (location.pathname === '/') {
            fetchDriverScore(year)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [year, menu])

    useEffect(() => {
        if (location.pathname === '/constructor-standings') {
            fetchConstructorScore(year)
        }
    }, [year, menu])

    return (
        <div className={s.root}>
            <header>
                <h1>Formula 1 - Information Application</h1>
                <nav>
                    <Link
                        to="/"
                        onClick={() => handleMenuClick('driver-standings')}
                    >
                        <p>Driver Standings</p>
                    </Link>
                    <Link
                        to="/constructor-standings"
                        onClick={() => handleMenuClick('constructor-standings')}
                    >
                        <p>Constructor Standings</p>
                    </Link>
                    <Link
                        to="/race-calendar"
                        onClick={() => handleMenuClick('race-calendar')}
                    >
                        <p>Race Calendar</p>
                    </Link>
                </nav>
                {showButtons && (
                    <>
                        <div className={s.buttons}>
                            <button value="2023" onClick={handleButtonClick}>
                                2023
                            </button>
                            <button value="2022" onClick={handleButtonClick}>
                                2022
                            </button>
                            <button value="2021" onClick={handleButtonClick}>
                                2021
                            </button>
                            <button value="2020" onClick={handleButtonClick}>
                                2020
                            </button>
                        </div>
                        <p className={s.year}>Year selected: {year}</p>
                    </>
                )}
            </header>
            <Routes>
                <Route
                    path="/"
                    element={
                        dataDS ? (
                            <DriverScoreTable DriverScore={dataDS} />
                        ) : null
                    }
                />
                <Route
                    path="/constructor-standings"
                    element={
                        dataCS ? (
                            <ConstructorScoreTable ConstructorScore={dataCS} />
                        ) : null
                    }
                />
                <Route
                    path="/race-calendar"
                    element={
                        dataRC ? <RaceCalendar RacesCalendar={dataRC} /> : null
                    }
                />
                <Route path="*" element={<h1>Error: Page not found</h1>} />
            </Routes>
        </div>
    )
}

export default App
