// User Types
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "admin" | "customer";
  created_at?: string;
  updated_at?: string;
}

export interface UserSignup {
  name: string;
  email: string;
  password: string;
  phone: string;
  role?: "admin" | "customer"; // Optional role, defaults to "customer"
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "customer";
}

// Vehicle Types
export interface Vehicle {
  id: number;
  vehicle_name: string;
  type: "car" | "bike" | "van" | "SUV";
  registration_number: string;
  daily_rent_price: number;
  availability_status: "available" | "booked";
  created_at?: string;
  updated_at?: string;
}

export interface CreateVehicleDTO {
  vehicle_name: string;
  type: "car" | "bike" | "van" | "SUV";
  registration_number: string;
  daily_rent_price: number;
  availability_status: "available" | "booked";
}

export interface UpdateVehicleDTO {
  vehicle_name?: string;
  type?: "car" | "bike" | "van" | "SUV";
  registration_number?: string;
  daily_rent_price?: number;
  availability_status?: "available" | "booked";
}

// Booking Types
export interface Booking {
  id: number;
  customer_id: number;
  vehicle_id: number;
  rent_start_date: string;
  rent_end_date: string;
  total_price: number;
  status: "active" | "cancelled" | "returned";
  created_at?: string;
  updated_at?: string;
}

export interface CreateBookingDTO {
  customer_id: number;
  vehicle_id: number;
  rent_start_date: string;
  rent_end_date: string;
}

export interface UpdateBookingDTO {
  status: "active" | "cancelled" | "returned";
}

// JWT Payload Types
export interface JwtPayload {
  id: number;
  email: string;
  role: "admin" | "customer";
}

// Response Types
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  statusCode?: number;
}

// Error Types
export interface ErrorResponse {
  success: false;
  message: string;
  statusCode: number;
  errorCode?: string;
}
