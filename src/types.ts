export interface MenuItem {
  id: string;
  nombre: string;
  descripcion?: string;
  precio: number;
}

export interface MenuCategory {
  categoria: string;
  items: MenuItem[];
}

export interface MenuData {
  informacion_restaurante: {
    nombre: string;
    telefonos: string[];
    whatsapp: string | null;
    redes_sociales: any;
    notas_contacto: string;
  };
  menu: MenuCategory[];
}
