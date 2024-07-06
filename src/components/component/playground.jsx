import React from 'react';
import { Plane, ArrowRight } from 'lucide-react';

const Playground = () => {
    return (
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
                    <p className="text-lg font-semibold">AB123456</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
                <div>
                    <p className="text-sm text-gray-500">Passenger Name</p>
                    <p className="text-lg font-semibold">John Doe</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Flight</p>
                    <p className="text-lg font-semibold">SH 789</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="text-lg font-semibold">15 JUL 2024</p>
                </div>
            </div>

            <div className="flex justify-between items-center mb-6">
                <div className="text-center">
                    <p className="text-sm text-gray-500">From</p>
                    <p className="text-xl font-bold">New York (JFK)</p>
                    <p className="text-lg">10:00 AM</p>
                </div>
                <ArrowRight className="w-14 h-14 text-blue-500" />
                <div className="text-center">
                    <p className="text-sm text-gray-500">To</p>
                    <p className="text-xl font-bold">London (LHR)</p>
                    <p className="text-lg">10:00 PM</p>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div>
                    <p className="text-sm text-gray-500">Gate</p>
                    <p className="text-lg font-semibold">A22</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Seat</p>
                    <p className="text-lg font-semibold">18A</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Class</p>
                    <p className="text-lg font-semibold">Economy</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Boarding Time</p>
                    <p className="text-lg font-semibold">09:30 AM</p>
                </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">Thank you for choosing SkyHigh Airlines. Enjoy your flight!</p>
            </div>
        </div>
    );
};

export default Playground;