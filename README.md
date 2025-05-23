# Clean Architecture con Atomic Design en Next.js

Este proyecto es un ejemplo de cómo estructurar una aplicación frontend en Next.js utilizando React y TypeScript, aplicando los principios de Clean Architecture y Atomic Design.

## Estructura de Carpetas

```
tmdb-explorer-app/
├── app/
│   ├── (public)/             # Rutas públicas (ej. página de inicio, búsqueda)
│   │   ├── page.tsx          # Página de inicio (películas populares)
│   │   ├── search/
│   │   │   └── page.tsx      # Página de búsqueda
│   │   ├── movies/
│   │   │   └── [id]/
│   │   │       └── page.tsx  # Página de detalles de la película
│   ├── layout.tsx          # Layout principal de la aplicación
│   ├── loading.tsx         # Componente de carga global
│   └── error.tsx           # Componente de error global
├── src/
│   ├── domain/
│   │   ├── entities/        # Interfaces para los datos de películas (Movie, Genre, Cast, Crew, etc.)
│   │   │   ├── movie.entity.ts
│   │   │   ├── genre.entity.ts
│   │   │   ├── cast.entity.ts
│   │   │   └── crew.entity.ts
│   │   ├── interfaces/      # Contratos para los repositorios de TMDb
│   │   │   └── movie.repository.ts
│   │   └── use-cases/       # Casos de uso para obtener datos de películas (GetPopularMovies, SearchMovies, GetMovieDetails)
│   │       ├── get-popular-movies.ts
│   │       ├── search-movies.ts
│   │       └── get-movie-details.ts
│   ├── application/
│   │   └── use-cases/       # Handlers para los casos de uso (orquestación y lógica de negocio adicional)
│   │       ├── get-popular-movies-handler.ts
│   │       ├── search-movies-handler.ts
│   │       └── get-movie-details-handler.ts
│   ├── infrastructure/
│   │   ├── api/             # Adaptador para la API de TMDb usando Axios
│   │   │   └── tmdb-api.ts
│   │   └── config/          # Configuración (ej. variables de entorno)
│   │       └── tmdb-config.ts
│   ├── presentation/
│   │   ├── components/      # Componentes de React organizados por Atomic Design
│   │   │   ├── atoms/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Typography.tsx
│   │   │   │   └── MoviePoster.tsx
│   │   │   ├── molecules/
│   │   │   │   ├── MovieCard.tsx
│   │   │   │   ├── SearchBar.tsx
│   │   │   │   └── GenreBadge.tsx
│   │   │   ├── organisms/
│   │   │   │   ├── MovieList.tsx
│   │   │   │   ├── MovieDetailsHeader.tsx
│   │   │   │   └── CastList.tsx
│   │   │   ├── templates/
│   │   │   │   ├── MovieListTemplate.tsx
│   │   │   │   └── MovieDetailsTemplate.tsx
│   │   │   └── pages/         # Contenido específico de las páginas (se comunicarán con los templates y hooks)
│   │   │       ├── components/  # Componentes específicos de las páginas (si es necesario)
│   │   ├── hooks/           # Hooks personalizados para la presentación (ej. para manejar la búsqueda)
│   │   │   └── useSearch.ts
│   ├── shared/
│   │   ├── utils/           # Funciones de utilidad (formato de fechas, etc.)
│   │   │   └── helpers.ts
│   │   ├── hooks/           # Hooks reutilizables (useDebounce)
│   │   │   └── useDebounce.ts
│   │   ├── constants/       # Constantes (endpoints de la API de TMDb, claves, etc.)
│   │   │   └── api-endpoints.ts
│   │   └── types/           # Tipos y interfaces compartidas
│   │       └── movie.types.ts
├── public/
│   └── ...
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md

```

