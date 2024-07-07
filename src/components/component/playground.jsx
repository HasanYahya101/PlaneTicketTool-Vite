import React, { useEffect } from 'react';
import { Plane, ArrowRight, Edit, Download } from 'lucide-react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from '../ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useMediaQuery from './mediaHook';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import html2canvas from 'html2canvas';

const Playground = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
    const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));

    const [passengerName, setPassengerName] = React.useState('John Doe');
    const [flightNumber, setFlightNumber] = React.useState('SH 789');
    const [date, setDate] = React.useState('15 JUL 2024');
    const [from, setFrom] = React.useState('New York (JFK)');
    const [to, setTo] = React.useState('London (LHR)');
    const [gate, setGate] = React.useState('A22');
    const [seat, setSeat] = React.useState('18A');
    const [classType, setClassType] = React.useState('Economy');
    const [boardingTime, setBoardingTime] = React.useState('09:30 AM');
    const [ticketNo, setTicketNo] = React.useState('AB123456');
    const [flightLeave, setFlightLeave] = React.useState('10:00 AM');
    const [flightArrive, setFlightArrive] = React.useState('10:00 PM');

    const [dateField, setDateField] = React.useState(new Date(2024, 6, 15));

    const [boardingHour, setBoardingHour] = React.useState('09');
    const [boardingMinute, setBoardingMinute] = React.useState('30');
    const [boardingAmpm, setBoardingAmpm] = React.useState('AM');

    const [flightLeaveHour, setFlightLeaveHour] = React.useState('10');
    const [flightLeaveMinute, setFlightLeaveMinute] = React.useState('00');
    const [flightLeaveAmpm, setFlightLeaveAmpm] = React.useState('AM');

    const [flightArriveHour, setFlightArriveHour] = React.useState('10');
    const [flightArriveMinute, setFlightArriveMinute] = React.useState('00');
    const [flightArriveAmpm, setFlightArriveAmpm] = React.useState('PM');

    useEffect(() => {
        // on change of date field, update the date string
        if (dateField) {
            setDate(format(dateField, 'dd MMM yyyy').toUpperCase());
        }
        else {
            setDate('No date selected');
        }
    }, [dateField]);

    useEffect(() => {
        setBoardingTime(`${boardingHour}:${boardingMinute} ${boardingAmpm}`);
    }, [boardingHour, boardingMinute, boardingAmpm]);

    useEffect(() => {
        setFlightLeave(`${flightLeaveHour}:${flightLeaveMinute} ${flightLeaveAmpm}`);
    }, [flightLeaveHour, flightLeaveMinute, flightLeaveAmpm]);

    useEffect(() => {
        setFlightArrive(`${flightArriveHour}:${flightArriveMinute} ${flightArriveAmpm}`);
    }, [flightArriveHour, flightArriveMinute, flightArriveAmpm]);

    const ticketRef = React.useRef(null);

    const downloadTicket = () => {
        const style = document.createElement('style');
        document.head.appendChild(style);
        style.sheet?.insertRule('body > div:last-child img { display: inline-block; }');

        html2canvas(ticketRef.current
            , { scale: 2, backgroundColor: null }
        ).then(canvas => {
            style.remove();
            const link = document.createElement('a');
            link.download = 'ticket.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    }

    return (
        <div className="mx-auto my-8 font-sans" >
            <div ref={ticketRef} className="bg-white border shadow-lg rounded-lg p-6 max-w-3xl mx-auto my-8 font-sans" id="ticket"
                style={{ lineHeight: '0.5' }}
            >
                <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                    <div className="flex items-center">
                        <Plane className="w-10 h-10 text-blue-500 mr-4" />
                        <div>
                            <h1 className="text-2xl font-bold text-blue-700">SkyHigh Airlines</h1>
                            <p className="text-sm text-gray-500">Your journey begins here</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-500">Ticket No.</p>
                        <p className="text-lg font-semibold">{ticketNo}</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className='text-start'>
                        <p className="text-sm text-gray-500">Passenger Name</p>
                        <p className="text-lg font-semibold">{passengerName}</p>
                    </div>
                    <div className='text-center'>
                        <p className="text-sm text-gray-500">Flight</p>
                        <p className="text-lg font-semibold">{flightNumber}</p>
                    </div>
                    <div className='text-end ml-auto'>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="text-lg font-semibold">{date}</p>
                    </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                    <div className="text-center">
                        <p className="text-sm text-gray-500">From</p>
                        <p className="text-xl font-bold">{from}</p>
                        <p className="text-lg">{flightLeave}</p>
                    </div>
                    <ArrowRight className="w-14 h-14 text-blue-500" />
                    <div className="text-center">
                        <p className="text-sm text-gray-500">To</p>
                        <p className="text-xl font-bold">{to}</p>
                        <p className="text-lg">{flightArrive}</p>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <div className='text-left'>
                        <p className="text-sm text-gray-500">Gate</p>
                        <p className="text-lg font-semibold">{gate}</p>
                    </div>
                    <div className='text-center'>
                        <p className="text-sm text-gray-500">Seat</p>
                        <p className="text-lg font-semibold">{seat}</p>
                    </div>
                    <div className='text-center'>
                        <p className="text-sm text-gray-500">Class</p>
                        <p className="text-lg font-semibold">{classType}</p>
                    </div>
                    <div className='text-right'>
                        <p className="text-sm text-gray-500">Boarding Time</p>
                        <p className="text-lg font-semibold">{boardingTime}</p>
                    </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-500">Thank you for choosing SkyHigh Airlines. Enjoy your flight!</p>
                </div>
            </div>
            <div className='flex justify-center'>
                {isDesktop ? (
                    <Dialog>
                        <DialogTrigger>
                            <Button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 flex items-center transition duration-300 rounded-md mr-2'>
                                <Edit className="w-5 h-5 mr-2" />
                                Edit Ticket
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="h-[86vh] mt-1 mb-2">
                            <DialogHeader>
                                <DialogTitle>Flight Boarding Pass</DialogTitle>
                                <DialogDescription>Enter or edit your flight details below</DialogDescription>
                            </DialogHeader>
                            <ScrollArea className='h-full'>
                                <form className="space-y-4 mr-6 ml-6 mb-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="passengerName">Passenger Name</Label>
                                        <Input
                                            id="passengerName"
                                            name="passengerName"
                                            value={passengerName}
                                            onChange={(e) => setPassengerName(e.target.value)}
                                            required
                                            maxLength={25}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="flightNumber">Flight Number</Label>
                                            <Input
                                                id="flightNumber"
                                                name="flightNumber"
                                                value={flightNumber}
                                                onChange={(e) => setFlightNumber(e.target.value)}
                                                required
                                                maxLength={25}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="date">Date</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {dateField ? format(dateField, 'PPP') : <span>Select date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        selected={dateField}
                                                        onSelect={setDateField}
                                                        onValueChange={setDateField}
                                                        onChange={setDateField}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="from">From</Label>
                                            <Input
                                                id="from"
                                                name="from"
                                                value={from}
                                                onChange={(e) => setFrom(e.target.value)}
                                                required
                                                maxLength={25}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="to">To</Label>
                                            <Input
                                                id="to"
                                                name="to"
                                                value={to}
                                                onChange={(e) => setTo(e.target.value)}
                                                required
                                                maxLength={25}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="gate">Gate</Label>
                                            <Input
                                                id="gate"
                                                name="gate"
                                                value={gate}
                                                onChange={(e) => setGate(e.target.value)}
                                                required
                                                maxLength={25}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="seat">Seat</Label>
                                            <Input
                                                id="seat"
                                                name="seat"
                                                value={seat}
                                                onChange={(e) => setSeat(e.target.value)}
                                                required
                                                maxLength={25}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="class">Class</Label>
                                        <Select defaultValue={`${classType}`} name="class" onValueChange={(value) => setClassType(value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder={`${classType}`} />
                                            </SelectTrigger>
                                            <SelectContent
                                            >
                                                <SelectItem value="Economy">Economy</SelectItem>
                                                <SelectItem value="Business">Business Class</SelectItem>
                                                <SelectItem value="First">First Class</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="boardingTime">Boarding Time</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button variant="outline" className="w-full">{boardingTime}</Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-80">
                                                <div className="grid gap-4">
                                                    <h4 className="font-medium leading-none">Select Time</h4>
                                                    <div className="grid grid-cols-3 gap-2">
                                                        <Select onValueChange={setBoardingHour} defaultValue={boardingHour}
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue placeholder={`${boardingHour}`} />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {hours.map((h) => (
                                                                    <SelectItem key={h} value={h.toString()}>
                                                                        {h}
                                                                    </SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <Select onValueChange={setBoardingMinute} defaultValue={boardingMinute}
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue placeholder={`${boardingMinute}`} />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {minutes.map((m) => (
                                                                    <SelectItem key={m} value={m.toString().padStart(2, '0')}>
                                                                        {m.toString().padStart(2, '0')}
                                                                    </SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <Select onValueChange={setBoardingAmpm} defaultValue={boardingAmpm}
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue placeholder={`${boardingAmpm}`} />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="AM">AM</SelectItem>
                                                                <SelectItem value="PM">PM</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="leavingTime">Leaving Time</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button variant="outline" className="w-full">{flightLeave}</Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-80">
                                                    <div className="grid gap-4">
                                                        <h4 className="font-medium leading-none">Select Time</h4>
                                                        <div className="grid grid-cols-3 gap-2">
                                                            <Select onValueChange={setFlightLeaveHour} defaultValue={flightLeaveHour}
                                                            >
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder={`${flightLeaveHour}`} />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {hours.map((h) => (
                                                                        <SelectItem key={h} value={h.toString()}>
                                                                            {h}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            <Select onValueChange={setFlightLeaveMinute} defaultValue={flightLeaveMinute}
                                                            >
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder={`${flightLeaveMinute}`} />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {minutes.map((m) => (
                                                                        <SelectItem key={m} value={m.toString().padStart(2, '0')}>
                                                                            {m.toString().padStart(2, '0')}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            <Select onValueChange={setFlightLeaveAmpm} defaultValue={flightLeaveAmpm}
                                                            >
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder={`${flightLeaveAmpm}`} />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="AM">AM</SelectItem>
                                                                    <SelectItem value="PM">PM</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="arrivalTime">Arrival Time</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button variant="outline" className="w-full">{flightArrive}</Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-80">
                                                    <div className="grid gap-4">
                                                        <h4 className="font-medium leading-none">Select Time</h4>
                                                        <div className="grid grid-cols-3 gap-2">
                                                            <Select onValueChange={setFlightArriveHour} defaultValue={flightArriveHour}
                                                            >
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder={`${flightArriveHour}`} />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {hours.map((h) => (
                                                                        <SelectItem key={h} value={h.toString()}>
                                                                            {h}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            <Select onValueChange={setFlightArriveMinute} defaultValue={flightArriveMinute}
                                                            >
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder={`${flightArriveMinute}`} />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {minutes.map((m) => (
                                                                        <SelectItem key={m} value={m.toString().padStart(2, '0')}>
                                                                            {m.toString().padStart(2, '0')}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            <Select onValueChange={setFlightArriveAmpm} defaultValue={flightArriveAmpm}
                                                            >
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder={`${flightArriveAmpm}`} />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="AM">AM</SelectItem>
                                                                    <SelectItem value="PM">PM</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="ticketNo">Ticket No.</Label>
                                        <Input
                                            id="ticketNo"
                                            name="ticketNo"
                                            value={ticketNo}
                                            onChange={(e) => setTicketNo(e.target.value)}
                                            required
                                            maxLength={25}
                                        />
                                    </div>
                                </form>
                            </ScrollArea>
                        </DialogContent>
                    </Dialog>
                ) : (
                    <Drawer>
                        <DrawerTrigger>
                            <Button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 flex items-center transition duration-300 rounded-md mr-2'>
                                <Edit className="w-5 h-5 mr-2" />
                                Edit Ticket
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent className="h-[70vh] mt-1 mb-2">
                            <DrawerHeader>
                                <DrawerTitle>Flight Boarding Pass</DrawerTitle>
                                <DrawerDescription>
                                    Enter or edit your flight details below
                                </DrawerDescription>
                            </DrawerHeader>
                            <ScrollArea className='h-full'>
                                <form className="space-y-4 mr-6 ml-6 mb-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="passengerName">Passenger Name</Label>
                                        <Input
                                            id="passengerName"
                                            name="passengerName"
                                            value={passengerName}
                                            onChange={(e) => setPassengerName(e.target.value)}
                                            required
                                            maxLength={25}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="flightNumber">Flight Number</Label>
                                            <Input
                                                id="flightNumber"
                                                name="flightNumber"
                                                value={flightNumber}
                                                onChange={(e) => setFlightNumber(e.target.value)}
                                                required
                                                maxLength={25}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="date">Date</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {dateField ? format(dateField, 'PPP') : <span>Select date</span>}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0">
                                                    <Calendar
                                                        mode="single"
                                                        selected={dateField}
                                                        onSelect={setDateField}
                                                        onValueChange={setDateField}
                                                        onChange={setDateField}
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="from">From</Label>
                                            <Input
                                                id="from"
                                                name="from"
                                                value={from}
                                                onChange={(e) => setFrom(e.target.value)}
                                                required
                                                maxLength={25}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="to">To</Label>
                                            <Input
                                                id="to"
                                                name="to"
                                                value={to}
                                                onChange={(e) => setTo(e.target.value)}
                                                required
                                                maxLength={25}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="gate">Gate</Label>
                                            <Input
                                                id="gate"
                                                name="gate"
                                                value={gate}
                                                onChange={(e) => setGate(e.target.value)}
                                                required
                                                maxLength={25}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="seat">Seat</Label>
                                            <Input
                                                id="seat"
                                                name="seat"
                                                value={seat}
                                                onChange={(e) => setSeat(e.target.value)}
                                                required
                                                maxLength={25}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="class">Class</Label>
                                        <Select defaultValue={`${classType}`} name="class" onValueChange={(value) => setClassType(value)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder={`${classType}`} />
                                            </SelectTrigger>
                                            <SelectContent
                                            >
                                                <SelectItem value="Economy">Economy</SelectItem>
                                                <SelectItem value="Business">Business Class</SelectItem>
                                                <SelectItem value="First">First Class</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="boardingTime">Boarding Time</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button variant="outline" className="w-full">{boardingTime}</Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-80">
                                                <div className="grid gap-4">
                                                    <h4 className="font-medium leading-none">Select Time</h4>
                                                    <div className="grid grid-cols-3 gap-2">
                                                        <Select onValueChange={setBoardingHour} defaultValue={boardingHour}
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue placeholder={`${boardingHour}`} />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {hours.map((h) => (
                                                                    <SelectItem key={h} value={h.toString()}>
                                                                        {h}
                                                                    </SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <Select onValueChange={setBoardingMinute} defaultValue={boardingMinute}
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue placeholder={`${boardingMinute}`} />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                {minutes.map((m) => (
                                                                    <SelectItem key={m} value={m.toString().padStart(2, '0')}>
                                                                        {m.toString().padStart(2, '0')}
                                                                    </SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <Select onValueChange={setBoardingAmpm} defaultValue={boardingAmpm}
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue placeholder={`${boardingAmpm}`} />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="AM">AM</SelectItem>
                                                                <SelectItem value="PM">PM</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="leavingTime">Leaving Time</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button variant="outline" className="w-full">{flightLeave}</Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-80">
                                                    <div className="grid gap-4">
                                                        <h4 className="font-medium leading-none">Select Time</h4>
                                                        <div className="grid grid-cols-3 gap-2">
                                                            <Select onValueChange={setFlightLeaveHour} defaultValue={flightLeaveHour}
                                                            >
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder={`${flightLeaveHour}`} />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {hours.map((h) => (
                                                                        <SelectItem key={h} value={h.toString()}>
                                                                            {h}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            <Select onValueChange={setFlightLeaveMinute} defaultValue={flightLeaveMinute}
                                                            >
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder={`${flightLeaveMinute}`} />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {minutes.map((m) => (
                                                                        <SelectItem key={m} value={m.toString().padStart(2, '0')}>
                                                                            {m.toString().padStart(2, '0')}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            <Select onValueChange={setFlightLeaveAmpm} defaultValue={flightLeaveAmpm}
                                                            >
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder={`${flightLeaveAmpm}`} />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="AM">AM</SelectItem>
                                                                    <SelectItem value="PM">PM</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="arrivalTime">Arrival Time</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button variant="outline" className="w-full">{flightArrive}</Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-80">
                                                    <div className="grid gap-4">
                                                        <h4 className="font-medium leading-none">Select Time</h4>
                                                        <div className="grid grid-cols-3 gap-2">
                                                            <Select onValueChange={setFlightArriveHour} defaultValue={flightArriveHour}
                                                            >
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder={`${flightArriveHour}`} />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {hours.map((h) => (
                                                                        <SelectItem key={h} value={h.toString()}>
                                                                            {h}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            <Select onValueChange={setFlightArriveMinute} defaultValue={flightArriveMinute}
                                                            >
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder={`${flightArriveMinute}`} />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    {minutes.map((m) => (
                                                                        <SelectItem key={m} value={m.toString().padStart(2, '0')}>
                                                                            {m.toString().padStart(2, '0')}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectContent>
                                                            </Select>
                                                            <Select onValueChange={setFlightArriveAmpm} defaultValue={flightArriveAmpm}
                                                            >
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder={`${flightArriveAmpm}`} />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="AM">AM</SelectItem>
                                                                    <SelectItem value="PM">PM</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="ticketNo">Ticket No.</Label>
                                        <Input
                                            id="ticketNo"
                                            name="ticketNo"
                                            value={ticketNo}
                                            onChange={(e) => setTicketNo(e.target.value)}
                                            required
                                            maxLength={25}
                                        />
                                    </div>
                                </form>
                            </ScrollArea>
                        </DrawerContent>
                    </Drawer>
                )}

                <Button
                    onClick={downloadTicket}
                    className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 flex items-center transition duration-300 rounded-md ml-2"
                >
                    <Download className="w-5 h-5 mr-2" />
                    Download Ticket
                </Button>
            </div>
        </div>
    );
};

export default Playground;