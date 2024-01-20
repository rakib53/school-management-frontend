import React from 'react';
import styles from './attendance.module.css'
import { getDaysFrom1ToCurrentDay } from './helper';
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
const Attendance = () => {
    const daysArray = getDaysFrom1ToCurrentDay();
    return (
        <section className={styles.attendance}>
            <div>
                <div>
                    <table>
                        <tr>
                            {daysArray.map((day, index) => (
                                <th key={index}>{day}</th>
                            ))}
                        </tr>
                        <tr>
                            <td>
                                <TiTick/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Attendance;