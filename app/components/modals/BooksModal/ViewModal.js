import React from 'react';
import Image from 'next/image';

const ViewModal = ({ isOpen, onClose, book }) => {
    if (!isOpen || !book) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md lg:max-w-2xl text-black">
                <h2 className="text-xl font-semibold mb-4">View Book Details</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Title</label>
                            <input
                                type="text"
                                value={book.title}
                                disabled
                                className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Author</label>
                            <input
                                type="text"
                                value={book.author}
                                disabled
                                className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Category</label>
                            <input
                                type="text"
                                value={book.category}
                                disabled
                                className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Published Year</label>
                            <input
                                type="text"
                                value={book.published}
                                disabled
                                className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-500"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Status</label>
                            <input
                                type="text"
                                value={book.status}
                                disabled
                                className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Book Image</label>
                            <Image
                                src={book.image}
                                alt={book.title}
                                className="mt-2 h-24 w-16 object-cover rounded"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewModal;