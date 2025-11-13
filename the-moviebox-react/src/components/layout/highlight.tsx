import React from "react";

const Highlight = () => {
  return (
    <section
      className="relative flex bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/assets/img/etT14XfDEqhQZdD47ywpyihXPyW.jpg')",
        backgroundPosition: "center right -200px", 
      }}
    >
   
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17,17,17,1) 20%, rgba(17,17,17,0.85) 45%, rgba(17,17,17,0.4) 70%, rgba(17,17,17,0) 100%)",
        }}
      ></div>

    
      <div className="relative z-[2] flex gap-8 py-10 mx-auto max-w-[1140px] w-full">
        <img
          className="rounded-lg w-[250px] h-auto shadow-lg"
          src="/assets/img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg"
          alt="Capa do filme"
        />

        <div className="flex flex-col justify-center text-white max-w-[600px]">
          <h2 className="text-4xl font-normal leading-snug">
            Como Treinar o seu Dragão
          </h2>

          <div className="text-sm my-2.5 flex flex-wrap items-center gap-2">
            <span className="bg-white/20 px-3 py-1 rounded-full">Fantasia</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Família</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">
              Ação & Aventura
            </span>
            <span className="pl-4 text-gray-400">2h 5m</span>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-normal pt-12 pb-2">Sinopse</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Em um mundo onde dragões e humanos coexistem, um jovem viking
              chamado Soluço se torna amigo de um dragão ferido chamado Banguela.
              Juntos, eles desafiam as tradições de suas tribos e descobrem que
              dragões não são os monstros que todos acreditavam ser.
            </p>
          </div>

       
          <div className="flex gap-4 my-6">
            <button className="bg-[#e50914] hover:bg-[#b8070f] text-white font-bold px-6 py-3 rounded transition">
              Assistir
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 py-3 rounded transition">
              Detalhes
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-6 py-3 rounded transition">
              + Adicionar à Lista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
