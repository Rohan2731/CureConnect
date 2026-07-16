import {
  FaReact,
  FaPython,
  FaDatabase,
} from "react-icons/fa";

function About() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* Hero Section */}

      <div className="max-w-6xl mx-auto">

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-3xl p-10 shadow-lg">

          <h1 className="text-5xl font-bold mb-4">
            🏥 About CureConnect
          </h1>

          <p className="text-lg">
            An AI-powered healthcare platform designed
            to assist users with disease prediction,
            medicine recommendations, healthcare
            guidance, and pharmacy discovery.
          </p>

        </div>

      </div>

      {/* Statistics */}

      <div className="max-w-6xl mx-auto mt-10">

        <div className="grid md:grid-cols-4 gap-5">

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-3xl font-bold text-blue-600">
              41+
            </h2>
            <p>Diseases</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-3xl font-bold text-blue-600">
              50+
            </h2>
            <p>Medicines</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-3xl font-bold text-blue-600">
              AI
            </h2>
            <p>Health Assistant</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-3xl font-bold text-blue-600">
              Maps
            </h2>
            <p>Pharmacy Locator</p>
          </div>

        </div>

      </div>

      {/* Features */}

      <div className="max-w-6xl mx-auto mt-10">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-6">
            ✨ Core Features
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div>🩺 Disease Prediction</div>
            <div>💊 Medicine Recommendation</div>
            <div>🔍 Medicine Information Search</div>
            <div>🤖 AI Health Chatbot</div>
            <div>📍 Pharmacy Locator</div>
            <div>📜 Prediction History</div>

          </div>

        </div>

      </div>

      {/* Tech Stack */}

      <div className="max-w-6xl mx-auto mt-10">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-6">
            🛠 Technology Stack
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-100 p-6 rounded-2xl text-center">

              <FaReact
                size={50}
                className="mx-auto text-blue-500 mb-3"
              />

              <h3 className="font-bold">
                React
              </h3>

              <p>Frontend Development</p>

            </div>

            <div className="bg-slate-100 p-6 rounded-2xl text-center">

              <FaPython
                size={50}
                className="mx-auto text-yellow-500 mb-3"
              />

              <h3 className="font-bold">
                Python & FastAPI
              </h3>

              <p>Backend Development</p>

            </div>

            <div className="bg-slate-100 p-6 rounded-2xl text-center">

              <FaDatabase
                size={50}
                className="mx-auto text-green-500 mb-3"
              />

              <h3 className="font-bold">
                SQLite
              </h3>

              <p>Database Storage</p>

            </div>

          </div>

        </div>

      </div>

      {/* Developer Section */}

      <div className="max-w-6xl mx-auto mt-10">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-6">
            👨‍💻 About Developer
          </h2>

          <h3 className="text-2xl font-semibold mb-3">
            Rohan Bilagi
          </h3>

          <p className="text-gray-700 leading-8">

            Computer Science Engineering student
            passionate about Artificial Intelligence,
            Machine Learning, Data Analytics,
            Software Development, and Quantitative
            Finance.

          </p>

          <p className="text-gray-700 leading-8 mt-4">

            CureConnect was developed to simplify
            healthcare access through AI-powered
            disease prediction, medicine
            recommendations, pharmacy discovery,
            and healthcare assistance.

          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              Python
            </span>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              React
            </span>

             <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              Tailwind CSS
            </span>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              FastAPI
            </span>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              Machine Learning
            </span>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              Data Analytics
            </span>

          </div>

        </div>

      </div>

      {/* Future Roadmap */}

      <div className="max-w-6xl mx-auto mt-10 mb-10">

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-6">
            🚀 Future Roadmap
          </h2>

          <ul className="space-y-3">

            <li>✅ Disease Prediction</li>
            <li>✅ Medicine Recommendation</li>
            <li>✅ AI Health Chatbot</li>
            <b><h4>Coming soon:</h4></b>
            <li>🔄 Gemini AI Integration</li>
            <li>🔄 Skin Disease Detection(In Version 2.0)</li>
            <li>🔄 Cloud Deployment</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default About;