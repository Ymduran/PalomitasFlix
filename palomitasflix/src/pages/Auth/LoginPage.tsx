
/** Página de inicio de sesión de PalomitasFlix. */
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Link, LockKeyhole, Mail, Popcorn } from "lucide-react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../../components/ui/Button";
import { Field, Input } from "../../components/ui/Field";
import { useSession } from "../../hooks/useSession";
import "../../styles/login.css";

const schema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Ingresa tu correo electrónico.")
    .email("Ingresa un correo electrónico válido."),
  password: z.string().min(1, "Ingresa tu contraseña."),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const { session, loading, login } = useSession();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  if (loading) {
    return (
      <div className="login-loading">
        Comprobando sesión...
      </div>
    );
  }

  if (session) return <Navigate to="/" replace />;

  const submit = async (data: FormData) => {
    try {
      await login(data.email, data.password);
      toast.success("¡Bienvenido a PalomitasFlix!");
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "No se pudo iniciar sesión. Verifica tus credenciales.",
      );
    }
  };

  return (
    <main className="login-page">
      <div className="login-container">

        <header className="login-header">
          <Link to="/login" className="login-brand">
            <span className="login-brand__icon">
              <Popcorn size={23} />
            </span>
            <span>Palomitas<span>Flix</span></span>
          </Link>
        </header>

        <div className="login-content">

          <section className="login-hero">
            <div className="login-hero__content">
              <span className="login-badge">
                <Popcorn size={13} />
                TU CINE, EN CASA
              </span>

              <h1>
                Prepara las palomitas,
                <span> ya empieza.</span>
              </h1>

              <p>
                Descubre nuevas historias, disfruta de tus
                películas y series favoritas en un solo lugar.
              </p>

              <div className="login-hero__decoration">
                <span>PELÍCULAS</span>
                <span>SERIES</span>
                <span>ENTRETENIMIENTO</span>
              </div>
            </div>
          </section>

          <section className="login-panel">
            <div className="login-card">

              <div className="login-card__heading">
                <span className="login-card__icon">
                  <Popcorn size={24} />
                </span>

                <h2>¡Bienvenido de nuevo!</h2>
                <p>Inicia sesión para continuar disfrutando.</p>
              </div>

              <form onSubmit={handleSubmit(submit)} noValidate>

                <Field
                  label="Correo electrónico"
                  error={errors.email?.message}
                >
                  <div className="login-input">
                    <Mail size={18} />
                    <Input
                      type="email"
                      placeholder="correo@ejemplo.com"
                      autoComplete="username"
                      disabled={isSubmitting}
                      {...register("email")}
                    />
                  </div>
                </Field>

                <Field
                  label="Contraseña"
                  error={errors.password?.message}
                >
                  <div className="login-input">
                    <LockKeyhole size={18} />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Ingresa tu contraseña"
                      autoComplete="current-password"
                      disabled={isSubmitting}
                      {...register("password")}
                    />

                    <button
                      type="button"
                      className="login-password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword
                          ? "Ocultar contraseña"
                          : "Mostrar contraseña"
                      }
                    >
                      {showPassword
                        ? <EyeOff size={18} />
                        : <Eye size={18} />
                      }
                    </button>
                  </div>
                </Field>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="login-submit"
                >
                  {isSubmitting ? "Ingresando..." : "Iniciar sesión"}
                </Button>

              </form>

              <div className="login-card__footer">
                <p>
                  Al ingresar podrás acceder a tu espacio
                  de entretenimiento.
                </p>
              </div>

            </div>
          </section>

        </div>

        <footer className="login-footer">
          <span>© {new Date().getFullYear()} PalomitasFlix</span>
          <span>Tu próxima historia comienza aquí.</span>
        </footer>

      </div>
    </main>
  );
}
