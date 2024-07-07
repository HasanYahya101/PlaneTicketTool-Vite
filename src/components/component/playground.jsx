import React from 'react';
import { Plane, ArrowRight } from 'lucide-react';
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

const Playground = () => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send the data to a server or perform other actions
    };

    return (
        <div className="mx-auto my-8 font-sans" >
            <div className="bg-white border shadow-lg rounded-lg p-6 max-w-3xl mx-auto my-8 font-sans">
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
                        <p className="text-lg font-semibold">{gate}</p>
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
                <Dialog>
                    <DialogTrigger>
                        <Button className='mr-2'>Edit</Button>
                    </DialogTrigger>
                    <DialogContent className="h-[86vh]">
                        <DialogHeader>
                            <DialogTitle>Flight Boarding Pass</DialogTitle>
                            <DialogDescription>Enter or edit your flight details below</DialogDescription>
                        </DialogHeader>
                        <ScrollArea className='h-full'>
                            <form onSubmit={handleSubmit} className="space-y-4 mr-2.5 ml-2.5">
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
                                        <Input
                                            id="date"
                                            name="date"
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            required
                                        />
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
                                    <Select name="class" onValueChange={(value) => setClassType(value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select class" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="economy">Economy</SelectItem>
                                            <SelectItem value="business">Business</SelectItem>
                                            <SelectItem value="first">First Class</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="boardingTime">Boarding Time</Label>
                                    <Input
                                        id="boardingTime"
                                        name="boardingTime"
                                        type="time"
                                        value={boardingTime}
                                        onChange={(e) => setBoardingTime(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="leavingTime">Leaving Time</Label>
                                        <Input
                                            id="leavingTime"
                                            name="leavingTime"
                                            type="time"
                                            value={flightLeave}
                                            onChange={(e) => setFlightLeave(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="arrivalTime">Arrival Time</Label>
                                        <Input
                                            id="arrivalTime"
                                            name="arrivalTime"
                                            type="time"
                                            value={flightArrive}
                                            onChange={(e) => setFlightArrive(e.target.value)}
                                            required
                                        />
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

                <Button className='ml-2'>Download</Button>
            </div>
        </div>
    );
};

export default Playground;