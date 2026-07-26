import powerbiImg from '../assets/documents/PowerBI.png'
import pythonImg from '../assets/documents/ITPhytonCertificate.png'
import ciscoPdf from '../assets/documents/CiscoCertificado.pdf'
import ciscoImg from '../assets/documents/CiscoITEssentials.png'

export const certifications = [
  {
    title: 'Cisco IT Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    description: 'Fundamentos de hardware y software de computadoras, redes, seguridad y resolución de problemas.',
    document: ciscoPdf,
    image: ciscoImg,
  },
  {
    title: 'Python Certificate',
    issuer: 'IT Academy',
    date: '2024',
    description: 'Programación en Python: estructuras de datos, control de flujo, funciones y desarrollo de scripts.',
    document: pythonImg,
    image: pythonImg,
  },
  {
    title: 'Power BI',
    issuer: 'Microsoft',
    date: '2026',
    description: 'Creación de informes interactivos, modelado de datos y visualización con Power BI Desktop.',
    document: powerbiImg,
    image: powerbiImg,
  },
]
