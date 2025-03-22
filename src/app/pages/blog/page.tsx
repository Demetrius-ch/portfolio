"use client";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

export default function Blog() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800 flex flex-col justify-between p-4">
      {/* En-tête */}
      <header className="flex justify-between items-center w-full mb-8">
        <div className="text-white text-2xl font-bold">e-chandler</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Vous n'avez pas de compte ?"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            S'inscrire
          </button>
        </div>
      </header>

      {/* Formulaire principal */}
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-auto">
        <h2 className="text-3xl text-blue-700 font-bold text-center mb-6">Bienvenue !</h2>

        {/* Bouton Google */}
        <button className="w-full bg-white border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center mb-6 hover:bg-gray-50 transition-colors">
          <FcGoogle className="text-2xl mr-3" />
          <span className="text-gray-700 font-medium">
            Continuer avec Google
          </span>
        </button>

        <div className="text-center text-gray-500 mb-4">ou</div>

        {/* Formulaire */}
        <form>
          {/* Input Email */}
          <div className="mb-4 relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              E-mail professionnel
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-purple-600">
              <MdEmail className="text-gray-500 text-xl ml-3" />
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 text-gray-700 focus:outline-none rounded-r-md"
                placeholder="Saisir votre adresse e-mail professionnelle"
                required
              />
            </div>
          </div>

          {/* Input Mot de passe */}
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mot de passe
            </label>
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-purple-600">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full px-3 py-2 text-gray-700 focus:outline-none rounded-l-md"
                placeholder="Saisir votre mot de passe"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 text-xl px-3 focus:outline-none"
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </button>
            </div>
            <a
              href="#"
              className="text-sm text-purple-600 hover:underline float-right mt-1"
            >
              Mot de passe oublié ?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition-colors"
          >
            Se connecter
          </button>
        </form>
      </div>

      {/* Pied de page */}
      <footer className="mt-8 text-center text-white">
        <p className="mb-4">
          Vous n'avez pas de compte ?{" "}
          <a href="#" className="font-medium hover:underline">
            S'inscrire
          </a>
        </p>
        <p className="text-xs">
          Ce site est protégé par Chandler et la politique de confidentialité et
          les conditions d'utilisation de Google s'appliquent.
        </p>
      </footer>
    </div>
  );
}
