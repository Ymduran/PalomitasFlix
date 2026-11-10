
/** Página de acceso a PalomitasFlix. */
import { zodResolver } from "@hookform/resolvers/zod";
import { LockKeyhole, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../../components/ui/Button";
import { Field, Input } from "../../components/ui/Field";
import { useSession } from "../../hooks/useSession";

const schema = z.object({
  email: z.string().min(1, "Ingresa tu correo electrónico.").email("Ingresa un correo válido."),
  password: z.string().min(1, "Ingresa tu contraseña."),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const { session, login } = useSession();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  if (session) return <Navigate to="/" replace />;

  const submit = async (data: FormData) => {
    try {
      await login(data.email, data.password);
      navigate("/");
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
      <section className="login-brand">
        <div className="login-brand__content">
          <img
            className="login-logo"
            src="/logo.png"
            alt="PalomitasFlix"
          />

          <h1>Tu próxima película comienza aquí.</h1>

          <p>
            Disfruta de tus películas y series favoritas
            en un solo lugar.
          </p>
        </div>
      </section>

      <section className="login-panel">
        <form
          className="login-form"
          onSubmit={handleSubmit(submit)}
        >
          <div>
            <span className="eyebrow">PALOMITASFLIX</span>
            <h2>Bienvenido de nuevo</h2>
            <p>Inicia sesión para continuar disfrutando.</p>
          </div>

          <Field label="Correo electrónico" error={errors.email?.message}>
            <div className="input-icon">
              <Mail />
              <Input
                type="email"
                autoComplete="email"
                placeholder="correo@ejemplo.com"
                {...register("email")}
              />
            </div>
          </Field>

          <Field label="Contraseña" error={errors.password?.message}>
            <div className="input-icon">
              <LockKeyhole />
              <Input
                type="password"
                autoComplete="current-password"
                placeholder="Ingresa tu contraseña"
                {...register("password")}
              />
            </div>
          </Field>

          <Button disabled={isSubmitting}>
            {isSubmitting ? "Ingresando..." : "Iniciar sesión"}
          </Button>
        </form>
      </section>
    </main>
  );
}
