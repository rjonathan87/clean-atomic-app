# Clean Architecture con Atomic Design en Next.js

Este proyecto es un ejemplo de cómo estructurar una aplicación frontend en Next.js utilizando React y TypeScript, aplicando los principios de Clean Architecture y Atomic Design.

## Estructura de Carpetas

src/
├── app/                                    
│   ├── layout.tsx                         # Layout principal de la aplicación
│   │   └── Configuración de React Query y estructura base HTML
│   ├── page.tsx                          # Página principal
│   │   └── Punto de entrada, renderiza componentes principales
│   └── globals.css                       # Estilos globales con Tailwind
│
├── domain/                               
│   ├── entities/                         
│   │   ├── movie.entity.ts              # Interface/Tipo para modelo Movie
│   │   └── user.entity.ts               # Interface/Tipo para modelo User
│   │
│   └── repositories/                     
│       ├── movie.repository.ts          # Interface para operaciones de Movies
│       └── user.repository.ts           # Interface para operaciones de Users
│
├── application/                          
│   ├── useCases/                        
│   │   ├── movie/                       
│   │   │   ├── getMovies.useCase.ts    # Lógica para obtener películas
│   │   │   └── getMovie.useCase.ts     # Lógica para obtener una película
│   │   └── user/                        
│   │       └── getUser.useCase.ts      # Lógica para obtener usuario
│   │
│   └── services/                        
│       ├── movie.service.ts            # Orquestación de casos de uso de Movies
│       └── user.service.ts             # Orquestación de casos de uso de Users
│
├── infrastructure/                      
│   ├── api/                            
│   │   ├── movieApi.ts                # Cliente HTTP para API de películas
│   │   └── config.ts                  # Configuración de Axios/Fetch
│   │
│   └── repositories/                   
│       └── movie.repository.impl.ts   # Implementación concreta del repositorio
│
├── presentation/                       
│   ├── atoms/                         
│   │   ├── Button/                    
│   │   │   ├── Button.tsx            # Componente botón reutilizable
│   │   │   └── Button.test.tsx       # Tests del componente
│   │   └── Image/                     
│   │       └── Image.tsx             # Componente imagen con fallback
│   │
│   ├── molecules/                     
│   │   └── MovieCard/                
│   │       ├── MovieCard.tsx         # Tarjeta de película (usa atoms)
│   │       └── MovieCard.test.tsx    # Tests del componente
│   │
│   ├── organisms/                    
│   │   └── MovieList/               
│   │       ├── MovieList.tsx        # Lista de películas (usa molecules)
│   │       └── MovieList.test.tsx   # Tests del componente
│   │
│   └── templates/                   
│       └── MovieTemplate/          
│           └── MovieTemplate.tsx    # Template base para páginas de películas
│
└── shared/                         
    ├── hooks/                      
    │   ├── useMovies.ts           # Hook personalizado para gestión de películas
    │   └── useAuth.ts             # Hook para autenticación
    │
    └── utils/                     
        ├── formatters.ts          # Funciones de formato (fechas, moneda)
        └── validators.ts          # Funciones de validación
```

## Archivos de Configuración Root

```
├── .env.example                   # Variables de entorno ejemplo
│   └── MOVIE_API_KEY=your_key    # Ejemplo de configuración
│
├── .env.local                    # Variables de entorno locales
│   └── Valores reales para desarrollo
│
├── next.config.ts               # Configuración de Next.js
│   └── Configuración de rutas, imágenes, etc
│
└── tsconfig.json               # Configuración de TypeScript
    └── Configuración de paths, compilación, etc
```

