import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';

const DateTimePickerButton = () => {
    const [date, setDate] = useState(null);
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [ampm, setAmpm] = useState('');

    const hours = Array.from({ length: 12 }, (_, i) => i + 1);
    const minutes = Array.from({ length: 60 }, (_, i) => i);

    const handleDateTimeSelection = () => {
        if (date) {
            const formattedDate = format(date, 'dd MMMM yyyy').toUpperCase();
            const formattedTime = `${hour}:${minute} ${ampm}`;
            console.log(`Selected date and time: ${formattedDate} ${formattedTime}`);
            // You can add your logic here to handle the selected date and time
        } else {
            console.log('Please select a date');
        }
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-[280px] justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                />
                <div className="p-4 grid gap-4">
                    <div className="grid grid-cols-3 gap-2">
                        <Select onValueChange={setHour}>
                            <SelectTrigger>
                                <SelectValue placeholder="Hour" />
                            </SelectTrigger>
                            <SelectContent>
                                {hours.map((h) => (
                                    <SelectItem key={h} value={h.toString()}>
                                        {h}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select onValueChange={setMinute}>
                            <SelectTrigger>
                                <SelectValue placeholder="Minute" />
                            </SelectTrigger>
                            <SelectContent>
                                {minutes.map((m) => (
                                    <SelectItem key={m} value={m.toString().padStart(2, '0')}>
                                        {m.toString().padStart(2, '0')}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select onValueChange={setAmpm}>
                            <SelectTrigger>
                                <SelectValue placeholder="AM/PM" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="AM">AM</SelectItem>
                                <SelectItem value="PM">PM</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button onClick={handleDateTimeSelection}>Confirm</Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default DateTimePickerButton;