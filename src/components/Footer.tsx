import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="font-playfair text-xl mb-4">Senteurs by Mabi</h3>
            <p className="text-gray-600 mb-4">
              Des fragrances d'exception nées d'un savoir-faire transmis de génération en génération.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-playfair text-xl mb-4">Collections</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/incense" className="text-gray-600 hover:text-primary">Encens</Link>
              </li>
              <li>
                <Link to="/categories/women" className="text-gray-600 hover:text-primary">Collection Femme</Link>
              </li>
              <li>
                <Link to="/categories/men" className="text-gray-600 hover:text-primary">Collection Luxe Homme</Link>
              </li>
              <li>
                <Link to="/categories/ambient" className="text-gray-600 hover:text-primary">Parfums d'Ambiance</Link>
              </li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="font-playfair text-xl mb-4">Liens Utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary">Notre Histoire</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary">Blog</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-xl mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Dakar, Sénégal</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-600">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span>+221 78 420 99 99 (WhatsApp)</span>
                  <span>+1 (514) 569-6541</span>
                  <span>+33 7 58 78 65 90</span>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="break-all">senteursbymabi@outlook.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-600">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span>Lundi - Vendredi : 9h - 20h</span>
                  <span>Samedi : 9h - 16h</span>
                  <span>Dimanche : Fermé</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Senteurs by Mabi. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;