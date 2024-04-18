import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "./assets/logo.png";
import video1 from "./assets/video1.mp4";
import { resourcesLinks, platformLinks, communityLinks } from "./constants";
import { Link } from 'react-router-dom';  

const App = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [showCreateProjectsPage, setShowCreateProjectsPage] = useState(false);
  const [showUploadImageSection, setShowUploadImageSection] = useState(false);
  const [showEstiloArquitetonico, setShowEstiloArquitetonico] = useState(false);
  const [showHoursDayPage, setShowHoursDayPage] = useState(false);
  const [showMaterialsPage, setShowMaterialsPage] = useState(false);
  const [showEnvironmentPage, setShowEnvironmentPage] = useState(false);
  const [showAdditionalPage, setShowAdditionalPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedImageName, setUploadedImageName] = useState('');
  const [selectedMaterialOption, setSelectedMaterialOption] = useState('');
  const [ambienteSelecionado, setAmbienteSelecionado] = useState('externo');
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [horarioSliderValue, setHorarioSliderValue] = useState(0);

// Adicione a lógica para definir outros estados como falsos antes de mostrar a showHoursDayPage
const handleAdvanceToHoursDayPage = () => {
  setSelectedMaterialOption('');
  setShowCreateProjectsPage(false);
  setShowUploadImageSection(false);
  setShowEnvironmentPage(false);
  setShowMaterialsPage(false);
  setShowHoursDayPage(true);
  setShowAdditionalPage(false); // Defina showAdditionalPage como false ao avançar para a página de horas do dia
};

const goToMaterialsPage = () => {
  setShowEnvironmentPage(false);
  setShowMaterialsPage(true);
  setShowHoursDayPage(false);
  setSelectedMaterialOption('');
  setShowEstiloArquitetonico(false);
};

const handleAdvanceToAdditionalPage = () => {
  setShowHoursDayPage(false);
  setShowCreateProjectsPage(false); // Defina showCreateProjectsPage como false ao avançar para a página adicional
  setShowUploadImageSection(false); // Defina showUploadImageSection como false ao avançar para a página adicional
  setShowEnvironmentPage(false); // Defina showEnvironmentPage como false ao avançar para a página adicional
  setShowMaterialsPage(false); // Defina showMaterialsPage como false ao avançar para a página adicional
  setShowAdditionalPage(true);
  setShowFinalPage(false);
};

const handleAdvanceToFinalPage = () => {
  setShowFinalPage(true);
  setShowCreateProjectsPage(false);
  setShowUploadImageSection(false);
  setShowEnvironmentPage(false);
  setShowMaterialsPage(false);
  setShowHoursDayPage(false);
  setShowAdditionalPage(false);
};



  const handleMaterialOptionChange = (e) => {
    if (e.target.value === 'criativo') {
      setShowEstiloArquitetonico(true);
    } else {
      setShowEstiloArquitetonico(false);
    }
  };
  
  
  const isMobile = () => {
    const userAgent = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  };

  useEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  const handleImageUpload = (file) => {
    if (file) {
      setUploadedImage(URL.createObjectURL(file)); // Armazenar a imagem
      setUploadedImageName(file.name); // Armazenar o nome da imagem
    }
  };

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const goToCreateProjectsPage = () => {
    setShowCreateProjectsPage(true);
  };

  const goToUploadImageSection = () => {
    setShowUploadImageSection(true);
    setShowEnvironmentPage(false);
  };

  const goToEnvironmentPage = () => {
    setShowCreateProjectsPage(false);
    setShowEnvironmentPage(true);
    setShowUploadImageSection(false);
    setShowMaterialsPage(false); 
  };
  
  
  return (
    <>
      {/*Sessão Navbar */}
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">Speed Render</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <button onClick={goToCreateProjectsPage} className="bg-gradient-to-r from-pink-500 to-purple-800 py-2 px-3 rounded-md" style={{ fontWeight: "bold", color: "white" }}>
                Criar projeto
              </button>
              <Link to="/auth" className="bg-gradient-to-r from-pink-500 to-purple-800 py-2 px-3 rounded-md" style={{ fontWeight: "bold", color: "white" }}>Perfil</Link>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
              </ul>
              <div className="flex space-x-6">
                <a href="#" className="py-2 px-3 border rounded-md">
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/*Sessão Página de Criação de Projetos */}
      {showCreateProjectsPage && !showUploadImageSection && (
       <div className="flex flex-col items-center mt-20">
       <div className="bg-gray-100 p-6 rounded-lg shadow-md w-96 text-center">
         <h2 className="text-2xl font-semibold mb-4 text-black">Dê um nome ao seu projeto:</h2>
         <input
           type="text"
           className="border-gray-300 border rounded-md px-3 py-2 w-full mb-4"
           placeholder="Digite o nome do projeto..."
         />
         <div>
           <button onClick={goToUploadImageSection} className="bg-gradient-to-r from-pink-500 to-purple-800 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition-transform duration-500 ease-in-out transform hover:scale-110" style={{ fontWeight: "bold"}}>
             Criar novo Projeto
           </button>
         </div>
       </div>
     </div>
      )}
      {/*Sessão Página UploadImage */}
      {showUploadImageSection && (
      <div id="UploadImage" className="flex flex-col items-center mt-20">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-96 text-center">
      <h2 className="text-2xl font-semibold mb-2 text-black">Faça o upload de uma imagem:</h2>
      <div className="w-full flex justify-center items-center mb-2">
      <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e.target.files[0])} className="hidden" id="imageUpload" />
      <label htmlFor="imageUpload" className="border border-black text-black py-1 px-2 rounded-md cursor-pointer">Escolher Imagem</label>
      </div> 
    {uploadedImage && (
      <div className="mt-4">
        <img src={uploadedImage} alt="Uploaded" className="w-100 h-auto mx-auto mb-2 rounded-md" />
        <p className="text-sm text-gray-600 mb-5">{uploadedImageName}</p>
      </div>
    )}
    <div>
      <button onClick={() => setShowUploadImageSection(false)} className="bg-gray-300 text-gray-800 py-2 px-3 rounded-md hover:bg-gray-400 transition-colors mr-2" style={{ fontWeight: "bold"}}>
        Voltar
      </button>
      <button onClick={goToEnvironmentPage} className="bg-gradient-to-r from-pink-500 to-purple-800 text-white py-2 px-3 rounded-md hover:bg-pink-600 transition-transform duration-500 ease-in-out transform hover:scale-110" style={{ fontWeight: "bold"}}>
  Avançar
</button>

    </div>
  </div>
</div>
)}
{showEnvironmentPage && (
  <div id="Environment" className="flex flex-col items-center mt-20">
    <div className="bg-gray-100 p-6 rounded-lg shadow-md md:flex md:items-center md:justify-center max-w-screen-md text-center">
      <div className="md:w-1/2 md:mr-6 mb-6 md:mb-0 text-left">
        <h2 className="mb-2 text-2xl font-semibold text-black">Você está trabalhando com um ambiente externo ou interno?</h2>
        <div className="flex items-center mb-4">
          <input type="radio" id="externo" name="ambiente" value="externo" className="mr-2" checked={ambienteSelecionado === 'externo'} onChange={() => setAmbienteSelecionado("externo")} />
          <label htmlFor="externo" className="mr-4">Externo</label>
          <input type="radio" id="interno" name="ambiente" value="interno" className="mr-2" onChange={() => setAmbienteSelecionado("interno")} />
          <label htmlFor="interno">Interno</label>
        </div>
        {/* Primeira pergunta (variável de acordo com a seleção) */}
        {ambienteSelecionado === "externo" ? (
          <div>
            <p className="mb-2">Que ambiente externo é esse?</p>
            <select className="border border-gray-300 rounded-md px-2 py-1 mb-4 w-full md:w-80">
              <option value="">Selecione...</option>
              <option value="casaResidencial">Casa Residencial</option>
              <option value="predioResidencial">Prédio Residencial</option>
              <option value="predioComercial">Prédio Comercial</option>
            </select>
          </div>
        ) : ambienteSelecionado === "interno" ? (
          <div>
            <p className="mb-2">Que ambiente interno é esse?</p>
            <select className="border border-gray-300 rounded-md px-2 py-1 mb-4 w-full md:w-80">
              <option value="">Selecione...</option>
              <option value="hotel">Hotel</option>
              <option value="escola">Escola</option>
              <option value="hospital">Hospital</option>
            </select>
          </div>
        ) : null}
        {/* Segunda pergunta (variável de acordo com a seleção) */}
        {ambienteSelecionado === "externo" ? (
          <div>
            <p className="mb-2">Qual a função desse ambiente externo?</p>
            <select className="border border-gray-300 rounded-md px-2 py-1 mb-4 w-full md:w-80">
              <option value="">Selecione...</option>
              <option value="fachada">Fachada</option>
              <option value="areaLazer">Área de Lazer</option>
              <option value="praca">Praça</option>
            </select>
          </div>
        ) : ambienteSelecionado === "interno" ? (
          <div>
            <p className="mb-2">Qual a função desse ambiente interno?</p>
            <select className="border border-gray-300 rounded-md px-2 py-1 mb-4 w-full md:w-80">
              <option value="">Selecione...</option>
              <option value="salaTv">Sala de TV</option>
              <option value="salaEstar">Sala de Estar</option>
              <option value="quarto">Quarto</option>
            </select>
          </div>
        ) : null}
      </div>
      {/* Coluna Direita (imagem carregada) */}
      <div className="md:w-1/2 md:ml-6">
        {uploadedImage && (
          <div>
            <img src={uploadedImage} alt="Uploaded" className="h-auto mx-auto mb-2 rounded-md" style={{ maxWidth: '320px' }} />
            <p className="text-sm text-gray-600 mb-5">{uploadedImageName}</p>
          </div>
        )}
      </div>
    </div>
    {/* Botões centralizados embaixo */}
    <div className="flex justify-center mt-6">
      <button onClick={goToUploadImageSection} className="bg-gray-300 text-gray-800 py-2 px-3 rounded-md hover:bg-gray-400 transition-colors mr-2" style={{ fontWeight: "bold" }}>
        Voltar
      </button>
      <button onClick={goToMaterialsPage} className="bg-gradient-to-r from-pink-500 to-purple-800 text-white py-2 px-3 rounded-md hover:bg-pink-600 transition-transform duration-500 ease-in-out transform hover:scale-110" style={{ fontWeight: "bold" }}>
  Avançar
</button>

    </div>
  </div>
)}
{/*Sessão da showMaterialsPage */}
{showMaterialsPage && (
  <div id="MaterialsPage" className="flex flex-col items-center mt-20">
    <div className="bg-gray-100 p-6 rounded-lg shadow-md md:flex md:items-center md:justify-center max-w-screen-md text-center">
      <div className="md:w-1/2 md:mr-6 mb-6 md:mb-0 text-left">
        <h2 className="mb-2 text-2xl font-semibold text-black">Quanto aos materiais?</h2>
        <div className="flex items-center mb-4">
          <input type="radio" id="fidelidade" name="materialOption" value="fidelidade" className="mr-2" onChange={handleMaterialOptionChange} />
          <label htmlFor="fidelidade" className="mr-4">Seja fiel aos materiais presentes na foto enviada</label>
        </div>
        <div className="flex items-center mb-4">
          <input type="radio" id="criativo" name="materialOption" value="criativo" className="mr-2" onChange={handleMaterialOptionChange} />
          <label htmlFor="criativo" className="mr-4">Seja criativo</label>
        </div>
        {showEstiloArquitetonico && (
          <div id="estiloArquitetonico">
            <label htmlFor="estiloDropdown" className="mb-2 block">Estilo Arquitetônico:</label>
            <select
              id="estiloDropdown"
              className="border border-gray-300 rounded-md px-2 py-1 mb-4 w-full md:w-80"
              value={selectedMaterialOption}
              onChange={handleMaterialOptionChange}>
              <option value="">Selecione...</option>
              <option value="barroco">Barroco</option>
              <option value="rococo">Rococó</option>
              <option value="neoclassico">Neoclássico</option>
              <option value="artNouveau">Art Nouveau</option>
              <option value="artDeco">Art Déco</option>
              <option value="modernismo">Modernismo</option>
              <option value="construtivismo">Construtivismo</option>
            </select>
          </div>
        )}
      </div>
      <div className="md:w-1/2 md:ml-6 md:pl-6">
        {uploadedImage && (
          <div>
            <img src={uploadedImage} alt="Uploaded" className="h-auto mx-auto mb-2 rounded-md" style={{ maxWidth: '320px' }} />
            <p className="text-sm text-gray-600 mb-5">{uploadedImageName}</p>
          </div>
        )}
      </div>
    </div>
    <div className="flex justify-center mt-6">
      <button onClick={goToEnvironmentPage} className="bg-gray-300 text-gray-800 py-2 px-3 rounded-md hover:bg-gray-400 transition-colors mr-2" style={{ fontWeight: "bold" }}>
        Voltar
      </button>
      <button onClick={handleAdvanceToHoursDayPage} className="bg-gradient-to-r from-pink-500 to-purple-800 text-white py-2 px-3 rounded-md hover:bg-pink-600 transition-transform duration-500 ease-in-out transform hover:scale-110" style={{ fontWeight: "bold" }}>
        Avançar
      </button>
    </div>
  </div>
)}



{!showCreateProjectsPage && !showUploadImageSection && !showEnvironmentPage && !showMaterialsPage && !showHoursDayPage && !showAdditionalPage && !showFinalPage && (
  <div className="flex flex-col items-center mt-6 lg:mt-10">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mt-20">
      Seja bem-vindo ao futuro!<br/>
      <span className="bg-gradient-to-r from-pink-500 to-purple-800 text-transparent bg-clip-text" style={{  fontSize: "85%"}}>
        {" "}
        Você vai se perguntar se é foto real ou render.
      </span>
    </h1>
    <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Com o Speed Render, você consegue criar projetos usando Inteligência Artificial com resultados em segundos!
    </p>
    <div className="flex mt-10 justify-center">
      <video
        autoPlay
        loop
        muted
        style={{ width: '40%'}}
        className="rounded-lg w-1/2 border border-pink-700 shadow-sm shadow-purple-400 mx-2 my-4"
      >
        <source src={video1} type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>
  </div>
)}
  {/* Sessão da página de horas do dia */}
  {showHoursDayPage && (
  <div id="HoursDayPage" className="flex flex-col items-center mt-20">
    <div className="bg-gray-100 p-6 rounded-lg shadow-md md:flex md:items-center md:justify-center max-w-screen-md">
      <div className="md:w-1/2 md:mr-6 mb-6 md:mb-0 text-left">
        <h2 className="mb-2 text-2xl font-semibold text-black">Horas do Dia</h2>
        <div className="flex items-center mb-4">
          <label htmlFor="horarioSlider" className="mr-4">Horário:</label>
          <input 
            type="range" 
            id="horarioSlider" 
            name="horarioSlider" 
            min="0" 
            max="23" 
            className="w-full" 
            onChange={(e) => setHorarioSliderValue(Math.round(e.target.value))} // Arredonda para o horário mais próximo
            value={horarioSliderValue} // Garante que o slider exiba o valor atual do estado
          />
          <span className="ml-2 text-gray-600">{horarioSliderValue}h</span>
        </div>
        {/* Clima do dia */}
        <div>
          <p className="mt-4 text-lg font-semibold">Clima do dia:</p>
          <select className="border border-gray-300 rounded-md px-2 py-1 mb-4 w-full md:w-80">
            {horarioSliderValue >= 0 && horarioSliderValue < 6 && (
              <>
                <option value="ceulimpo">Céu limpo</option>
                <option value="nublado">Nublado</option>
                <option value="chuvoso">Chuvoso</option>
                <option value="tempestade">Tempestade</option>
                <option value="neblina">Neblina</option>
                <option value="ventoso">Ventoso</option>
                <option value="neve">Neve</option>
                <option value="luacheia">Lua Cheia</option>
                <option value="luanova">Lua Nova</option>
                <option value="estrelado">Estrelado</option>
              </>
            )}
            {(horarioSliderValue >= 6 && horarioSliderValue < 18) && (
              <>
                <option value="ensolarado">Ensolarado</option>
                <option value="nublado">Nublado</option>
                <option value="parcialnublado">Parcialmente Nublado</option>
                <option value="chuvoso">Chuvoso</option>
                <option value="tempestade">Tempestade</option>
                <option value="neblina">Neblina</option>
                <option value="ventoso">Ventoso</option>
                <option value="neve">Neve</option>
              </>
            )}
            {(horarioSliderValue >= 18 && horarioSliderValue <= 23) && (
              <>
                <option value="ceulimpo">Céu limpo</option>
                <option value="nublado">Nublado</option>
                <option value="chuvoso">Chuvoso</option>
                <option value="tempestade">Tempestade</option>
                <option value="neblina">Neblina</option>
                <option value="ventoso">Ventoso</option>
                <option value="neve">Neve</option>
                <option value="luacheia">Lua Cheia</option>
                <option value="luanova">Lua Nova</option>
                <option value="estrelado">Estrelado</option>
              </>
            )}
          </select>
        </div>
      </div>
      <div className="md:w-1/2 md:ml-6">
        {uploadedImage && (
          <div>
            <img src={uploadedImage} alt="Uploaded" className="h-auto mx-auto mb-2 rounded-md" style={{ maxWidth: '320px' }} />
            <p className="text-sm text-gray-600 mb-5">{uploadedImageName}</p>
          </div>
        )}
      </div>
    </div>
    <div className="flex justify-center mt-6">
      <button onClick={goToMaterialsPage} className="bg-gray-300 text-gray-800 py-2 px-3 rounded-md hover:bg-gray-400 transition-colors mr-2" style={{ fontWeight: "bold" }}>
        Voltar
      </button>
      <button onClick={handleAdvanceToAdditionalPage} className="bg-gradient-to-r from-pink-500 to-purple-800 text-white py-2 px-3 rounded-md hover:bg-pink-600 transition-transform duration-500 ease-in-out transform hover:scale-110" style={{ fontWeight: "bold" }}>
        Avançar
      </button>
    </div>
  </div>
)}
{/* Sessão da AdditionalPage */}
{showAdditionalPage && (
  <div id="AdditionalPage" className="flex flex-col items-center mt-20">
    <div className="bg-gray-100 p-6 rounded-lg shadow-md md:flex md:items-center md:justify-center max-w-screen-md">
      {/* Esquerda: Textos com Checkboxes */}
      <div className="md:w-1/2 md:mr-6 mb-6 md:mb-0 text-left">
        <h2 className="mb-2 text-2xl font-semibold text-black">Título da AdditionalPage</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input type="checkbox" id="people" name="people" className="mr-2" />
            <label htmlFor="people">Pessoas</label><br/>
            <input type="checkbox" id="dog" name="dog" className="mr-2" />
            <label htmlFor="dog">Cachorro</label><br/>
            <input type="checkbox" id="car" name="car" className="mr-2" />
            <label htmlFor="car">Carro</label><br/>
            <input type="checkbox" id="sculpture" name="sculpture" className="mr-2" />
            <label htmlFor="sculpture">Escultura</label><br/>
            <input type="checkbox" id="indoor-lighting" name="indoor-lighting" className="mr-2" />
            <label htmlFor="indoor-lighting">Iluminação Interna Acesa</label><br/>
            <input type="checkbox" id="outdoor-lighting" name="outdo  or-lighting" className="mr-2" />
            <label htmlFor="outdoor-lighting">Iluminação Externa Acesa</label><br/>
            <input type="checkbox" id="vegetation" name="vegetation" className="mr-2" />
            <label htmlFor="vegetation">Vegetação</label><br/>
            <input type="checkbox" id="furniture" name="furniture" className="mr-2" />
            <label htmlFor="furniture">Mobília</label><br/>
          </div>
          <div>
            <input type="checkbox" id="water-elements" name="water-elements" className="mr-2" />
            <label htmlFor="water-elements">Elementos de Água</label><br/>
            <input type="checkbox" id="street-art" name="street-art" className="mr-2" />
            <label htmlFor="street-art">Arte de Rua</label><br/>
            <input type="checkbox" id="signage" name="signage" className="mr-2" />
            <label htmlFor="signage">Sinalização</label><br/>
            <input type="checkbox" id="playground" name="playground" className="mr-2" />
            <label htmlFor="playground">Playground</label><br/>
            <input type="checkbox" id="sports-equipment" name="sports-equipment" className="mr-2" />
            <label htmlFor="sports-equipment">Equipamentos esportivos</label><br/>
          </div>
        </div>
      </div>
      {/* Direita: Imagem carregada */}
      <div className="md:w-1/2 md:ml-6 md:pl-6">
        {uploadedImage && (
          <div>
            <img src={uploadedImage} alt="Uploaded" className="h-auto mx-auto mb-2 rounded-md" style={{ maxWidth: '320px' }} />
            <p className="text-sm text-gray-600 mb-5">{uploadedImageName}</p>
          </div>
        )}
      </div>
    </div>
    {/* Botões Voltar e Avançar */}
    <div className="flex justify-center mt-6">
      <button onClick={handleAdvanceToHoursDayPage} className="bg-gray-300 text-gray-800 py-2 px-3 rounded-md hover:bg-gray-400 transition-colors mr-2" style={{ fontWeight: "bold" }}>
        Voltar
      </button>
      <button onClick={handleAdvanceToFinalPage} className="bg-gradient-to-r from-pink-500 to-purple-800 text-white py-2 px-3 rounded-md hover:bg-pink-600 transition-transform duration-500 ease-in-out transform hover:scale-110"style={{ fontWeight: "bold" }}>
        Avançar
      </button>
      </div>
      </div>
    )}

{showFinalPage && (
  <div id="FinalPage" className="flex flex-col items-center mt-20">
    <div className="bg-gray-100 p-6 rounded-lg shadow-md md:flex md:items-center md:justify-center max-w-screen-md">
      {/* Esquerda: Texto */}
      <div className="md:w-1/2 md:mr-6 mb-6 md:mb-0 text-left">
        <h2 className="mb-2 text-1xl font-semibold text-black">Digite seu e-mail:</h2>
        <input type="email" id="email" name="email" className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4" placeholder="Digite seu e-mail" />
        <h2 className="mb-2 text-1xl font-semibold text-black">Qual seu nome?</h2>
        <input type="text" id="fullName" name="fullName" className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4" placeholder="Digite seu nome" />
      </div>
      {/* Direita: Imagem carregada */}
      <div className="md:w-1/2 md:ml-6 md:pl-6 flex items-center justify-center">
        {uploadedImage && (
          <div>
            <img src={uploadedImage} alt="Uploaded" className="max-w-full h-auto mx-auto mb-2 rounded-md" style={{ maxWidth: '320px' }} />
            <p className="text-sm text-gray-600 mb-5">{uploadedImageName}</p>
          </div>
        )}
      </div>
    </div>
    {/* Botões Voltar e Avançar */}
    <div className="flex justify-center mt-6">
      <button onClick={handleAdvanceToAdditionalPage} className="bg-gray-300 text-gray-800 py-2 px-3 rounded-md hover:bg-gray-400 transition-colors mr-2" style={{ fontWeight: "bold" }}>
        Voltar
      </button>
      <button className="bg-gradient-to-r from-pink-500 to-purple-800 text-white py-2 px-3 rounded-md hover:bg-pink-600 transition-transform duration-500 ease-in-out transform hover:scale-110" style={{ fontWeight: "bold" }}>
        Avançar
      </button>
    </div>
  </div>
)}



{/* Sessão da Footer Page */}
{!showCreateProjectsPage && !showUploadImageSection && !showEnvironmentPage && !showMaterialsPage && !showHoursDayPage && !showAdditionalPage && !showFinalPage && (
  <footer className="mt-20 border-t py-10 border-neutral-700 text-center">
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-7xl">
      <div>
        <h3 className="text-md font-semibold mb-4">Resources</h3>
        <ul className="space-y-2">
          {resourcesLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-neutral-300 hover:text-white"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-md font-semibold mb-4">Platform</h3>
        <ul className="space-y-2">
          {platformLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-neutral-300 hover:text-white"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-md font-semibold mb-4">Community</h3>
        <ul className="space-y-2">
          {communityLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-neutral-300 hover:text-white"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
)}

    </>
  );
};

export default App;