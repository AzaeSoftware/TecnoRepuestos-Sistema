# TecnoRepuestos-Sistema
Practica de Gestión De La Configuración Del Software.    Sistema integral de gestión de inventario, compras y ventas para TecnoRepuestos S.A. Incluye módulos de productos, compras, ventas, inventario y portal del cliente.

# TecnoRepuestos S.A. - Sistema de Gestión

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v18-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://react.dev/)

Sistema integral de gestión de inventario, compras y ventas para TecnoRepuestos S.A.

## Características

- **Gestión de Productos:** Registro, actualización y control de catálogo
- **Control de Inventario:** Seguimiento de stock, alertas de reorden
- **Módulo de Compras:** Órdenes a proveedores, recepción automática
- **Módulo de Ventas:** Registro de ventas, generación de comprobantes
- **Portal del Cliente:** Consulta de pedidos, descarga de comprobantes
- **Autenticación:** Sistema JWT seguro
- **Reportes:** Análisis de ventas e inventario

## Tecnologías

- **Backend:** Node.js + Express
- **Frontend:** React + Vite
- **Base de Datos:** PostgreSQL
- **Autenticación:** JWT
- **API:** REST

## Requisitos Previos

- Node.js v18+
- PostgreSQL 12+
- Git

## Instalación Rápida

### Backend
```bash
cd backend
npm install
cp .env.example .env
# Configurar variables en .env
npm run dev
```

La API estará disponible en: `http://localhost:3000`

### Frontend
```bash
cd frontend
npm install
npm run dev
```

La aplicación estará disponible en: `http://localhost:5173`

## Estructura del Proyecto