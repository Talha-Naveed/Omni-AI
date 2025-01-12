import { useState, useEffect, FormEvent } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");
  const [scriptGenerated, setScriptGenerated] = useState(null);
  const [samples, setSamples] = useState([
    "sample1.mp4",
    "sample2.mp4",
    "sample3.mp4",
  ]);
  const [activeSampleIndex, setActiveSampleIndex] = useState(null);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randomSample() {
    const random = randomIntFromInterval(0, samples.length - 1);
    setActiveSampleIndex(random);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    setLoadingMessage("Generating script...");

    // Simulate script generation
    setTimeout(() => {
      const generatedScript = `Generated script for YouTube video based on URL: ${url}`;
      setScriptGenerated(generatedScript);
      setLoadingMessage("");
    }, 2000);
  }

  useEffect(() => {
    if (samples.length) {
      randomSample();
      const intervalId = setInterval(() => {
        randomSample();
        console.log("Random sample updated");
      }, 3000);

      return () => clearInterval(intervalId); // Cleanup interval on unmount
    }
  }, [samples]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {loadingMessage && (
        <div className="fixed inset-0 z-20 bg-black/90 flex justify-center items-center">
          <p className="text-4xl text-center">{loadingMessage}</p>
        </div>
      )}

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">YouTube Script Generator</h1>
          <p className="text-lg mb-6">
            Enter a URL to generate a script for your YouTube video!
          </p>

          <form onSubmit={handleSubmit} className="grid gap-4 justify-center">
            <input
              className="border-2 rounded-lg bg-transparent text-white px-4 py-2 w-full"
              value={url}
              onChange={(ev) => setUrl(ev.target.value)}
              type="url"
              placeholder="Enter YouTube URL..."
            />
            <button
              className="bg-emerald-500 text-white px-6 py-2 rounded-lg uppercase"
              type="submit"
            >
              Generate Script
            </button>
          </form>

          {scriptGenerated && (
            <div className="mt-8 p-4 border border-gray-700 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Generated Script:</h2>
              <p>{scriptGenerated}</p>
            </div>
          )}
        </div>

        <div className="mt-16">
          <h2 className="text-center text-2xl mb-6">Preview Your Video</h2>
          <div className="relative w-[240px] h-[380px] mx-auto">
            {samples.map((sample, samplesKey) => (
              <video
                key={samplesKey}
                playsInline
                muted
                loop
                autoPlay
                className="shadow-4xl shadow-sky-400 rounded-2xl absolute top-2 transition-all duration-300"
                style={{
                  opacity: samplesKey === activeSampleIndex ? "1" : "0",
                  transform:
                    "scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(3deg) translateX(0px) translateY(0px) translateZ(0px) skewX(0deg) skewY(0deg)",
                }}
                src={`/videos/${sample}`}
              ></video>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
