export interface ExpedienteInterfaz  {
    fecha:          Date;
    estado:         Estado;
    vehiculos:      Vehiculo[];
    clase_evento:   ClaseEvento | null;
    lugar:          string;
    nro_expediente: string;
    latitud:        null | string;
    longitud:       null | string;
}

export enum ClaseEvento {
    ADeterminar = "A determinar",
    AtropelloPeatón = "Atropello peatón",
    Choque = "Choque",
    ChoqueMúltiple = "Choque múltiple",
    ColisiónFrontal = "Colisión frontal",
    ColisiónLateral = "Colisión lateral",
    ColisiónMúltiple = "Colisión múltiple",
    ColisiónPorAlcance = "Colisión por alcance",
    Despeñamiento = "Despeñamiento",
    Despiste = "Despiste",
    Impacto = "Impacto",
    Incendio = "Incendio",
    Sumersión = "Sumersión",
    Vuelco = "Vuelco",
}

export enum Estado {
    EnCurso = "En Curso",
    Finalizada = "Finalizada",
}

export interface Vehiculo {
    tipo:                Tipo;
    suceso:              Suceso;
    marca:               string;
    modelo:              string;
    dominio:             string;
    investigacion:       boolean;
    categoria_servicios: CategoriaServicios | null;
}

export enum CategoriaServicios {
    ADeterminar = "A Determinar",
    Cargas = "Cargas",
    NoAplica = "No Aplica",
    Pasajeros = "Pasajeros",
}

export enum Suceso {
    Accidente = "Accidente",
}

export enum Tipo {
    ADeterminar = "A determinar",
    Automóvil = "Automóvil",
    CamionetaPickUp = "Camioneta pick up",
    CamionetaPickUpCabinaSimple = "Camioneta pick up cabina simple",
    CamiónRígido = "Camión rígido",
    CamiónTractor = "Camión Tractor",
    Furgón = "Furgón",
    MicroómnibusVAN = "Microómnibus VAN",
    Motocicleta = "Motocicleta",
    Otro = "Otro",
    Sedan4Puertas = "Sedan, 4 Puertas",
    Semiremolque = "Semiremolque",
    Suv = "SUV",
    Tractor = "Tractor",
    Utilitario = "Utilitario",
    ÓmnibusDoblePiso = "Ómnibus Doble Piso",
    ÓmnibusInterurbano = "Ómnibus Interurbano",
    ÓmnibusInterurbanoDoblePiso = "Ómnibus interurbano doble piso",
    ÓmnibusPisoNormal = "Ómnibus piso normal",
    ÓmnibusUrbano = "Ómnibus urbano",
}
