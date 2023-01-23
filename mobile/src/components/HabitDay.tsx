import { TouchableOpacity, TouchableOpacityProps, Dimensions } from "react-native";
import clsx from "clsx";
import { generateProgressPercentage } from '../utils/generate-progress-percentage'
import dayjs from "dayjs";

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5)

interface Props extends TouchableOpacityProps {
    amountOfHabit?: number;
    amountCompleted?: number;
    date: Date;
 };

export function HabitDay({ amountOfHabit = 0, amountCompleted = 0, date, ...rest }: Props) {
    const amountAccomplishedPercentetage = amountOfHabit > 0 ? generateProgressPercentage(amountOfHabit, amountCompleted) : 0;
    const today = dayjs().startOf('day').toDate();
    const isCurrentDay = dayjs(date).isSame(today);
    return (
        <TouchableOpacity
            className={clsx('rounded-lg border-2 m-1', { 
                ["bg-zinc-900 border-zinc-800"] : amountAccomplishedPercentetage === 0,
                ["bg-violet-900 border-violet-700"] : amountAccomplishedPercentetage > 0 && amountAccomplishedPercentetage < 20,
                ["bg-violet-800 border-violet-600"] : amountAccomplishedPercentetage >= 20 && amountAccomplishedPercentetage < 40,
                ["bg-violet-700 border-violet-500"] : amountAccomplishedPercentetage >= 40 && amountAccomplishedPercentetage < 60,
                ["bg-violet-600 border-violet-400"] : amountAccomplishedPercentetage >= 60 && amountAccomplishedPercentetage < 80,
                ["bg-violet-500 border-violet-300"] : amountAccomplishedPercentetage >= 80,
                ["border-white border-4"] : isCurrentDay,
            })}
            style={{ width: DAY_SIZE, height: DAY_SIZE }}
            activeOpacity={0.7}
            {...rest}
        />
    )
}