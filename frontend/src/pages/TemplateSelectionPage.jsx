import { User } from 'lucide-react';

const TemplateSelectionPage = ({ setCurrentPage }) => (
    <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                    Choose Your Portfolio Template
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Select a professional template that best represents your style and personality
                </p>
            </div>

            {/* Template 1 */}
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="h-80 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-8">
                            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full mb-6 flex items-center justify-center">
                                <User className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">John Doe</h3>
                            <p className="text-lg opacity-90 mb-2">Senior Developer</p>
                            <p className="text-sm opacity-75 text-center">Crafting digital experiences with passion</p>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className='flex justify-between items-center mb-3'>
                            <h4 className="text-2xl font-bold text-gray-900 mb-3">Professional Blue</h4>
                            <button className='bg-blue-600 rounded-lg h-9 w-30 text-white mr-1 hover:bg-blue-800 '
                                onClick={() => window.location.href = '/temp01'}>Preview</button>
                        </div>

                        <p className="text-gray-600 mb-6">
                            Clean, modern design perfect for corporate professionals, consultants, and business executives.
                        </p>
                        <button
                            onClick={() => window.location.href = '/form'}
                            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                        >
                            Use This Template
                        </button>
                    </div>
                </div>

                {/* Template 2 */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="h-80 bg-gray-900 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-8">
                            <div className="w-24 h-24 bg-gray-700 rounded-full mb-6 flex items-center justify-center">
                                <User className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Jane Smith</h3>
                            <p className="text-lg opacity-90 mb-2">Creative Designer</p>
                            <p className="text-sm opacity-75 text-center">Designing the future, one pixel at a time</p>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className='flex justify-between items-center mb-3'>
                            <h4 className="text-2xl font-bold text-gray-900 mb-3">Dark Portfolio</h4>
                            <button className='bg-blue-600 rounded-lg h-9 w-30 text-white mr-1 hover:bg-blue-800  ' onClick={() => window.location.href = 'temp02'}>Preview</button>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Bold, striking layout ideal for creative professionals, developers, and designers.
                        </p>
                        <button
                            onClick={() => window.location.href = '/form'}
                            className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                        >
                            Use This Template
                        </button>
                    </div>
                </div>
            </div>

            <div className="text-center mt-12">
                <button
                    onClick={() => window.location.href = '/portfoliolist'}
                    className="text-blue-600 hover:text-blue-800 font-medium text-lg"
                >
                    Or browse existing portfolios →
                </button>
            </div>
        </div>
    </div>
);

export default TemplateSelectionPage;
