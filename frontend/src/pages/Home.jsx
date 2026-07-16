import {
  FaRobot,
  FaPills,
  FaMapMarkerAlt,
  FaHeartbeat,
} from "react-icons/fa";

function Home() {
  const features = [
    {
      icon: <FaHeartbeat size={40} />,
      title: "Disease Prediction",
      desc: "Predict diseases using AI and symptoms.",
    },
    {
      icon: <FaPills size={40} />,
      title: "Medicine Search",
      desc: "Find medicine information instantly.",
    },
    {
      icon: <FaRobot size={40} />,
      title: "AI Chatbot",
      desc: "Get healthcare guidance anytime.",
    },
    {
      icon: <FaMapMarkerAlt size={40} />,
      title: "Pharmacy Locator",
      desc: "Locate nearby pharmacies easily.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-24 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-6xl font-bold mb-6">
            🏥 CureConnect
          </h1>

          <p className="text-2xl mb-4">
            AI-Powered Healthcare Assistant
          </p>

          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Predict diseases, explore medicines,
            chat with AI, locate pharmacies and
            access healthcare services from a
            single platform.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition">

              Get Started

            </button>

            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition">

              Learn More

            </button>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="max-w-6xl mx-auto px-6 -mt-10">

        <div className="grid md:grid-cols-4 gap-5">

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-bold text-blue-600">
              41+
            </h2>
            <p>Diseases</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-bold text-blue-600">
              50+
            </h2>
            <p>Medicines</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-bold text-blue-600">
              AI
            </h2>
            <p>Healthcare Chatbot</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-bold text-blue-600">
              Maps
            </h2>
            <p>Pharmacy Locator</p>
          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">

          Core Features

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, index) => (
            <div
              key={index}
              className="
              bg-white
              rounded-2xl
              shadow-lg
              p-6
              text-center
              hover:-translate-y-2
              transition
              duration-300
            "
            >
              <div className="text-blue-600 flex justify-center mb-4">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;