"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";
import { 
  ArrowUpRight, 
  ArrowLeft, 
  Server, 
  Monitor, 
  Activity, 
  Cloud,
  Package,
  Terminal,
  Shield,
  Palette,
  Zap,
  CheckCircle2,
  Users,
  Lock,
  Eye,
  Radio,
  Database,
  RefreshCw,
  FileCode,
  Layers,
  GitBranch,
  Box,
  Building,
  Boxes,
  Puzzle,
  CreditCard,
  FileText,
  Briefcase,
  Heart,
  TrendingUp,
  ShoppingCart,
  Handshake,
  BarChart,
  Link as LinkIcon
} from "lucide-react";
import Link from "next/link";
import { Navbar01 } from "@/components/navbar-01";
import Footer from "@/components/footer";

// Tech stack icons as simple components
const SpringBootIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.59 12c0-4.74-3.85-8.59-8.59-8.59S3.41 7.26 3.41 12s3.85 8.59 8.59 8.59 8.59-3.85 8.59-8.59zm-8.59 6.77c-3.74 0-6.77-3.03-6.77-6.77S8.26 5.23 12 5.23s6.77 3.03 6.77 6.77-3.03 6.77-6.77 6.77z"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
);

const PostgresIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
  </svg>
);

const RedisIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const KafkaIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="18" r="3"/>
    <path d="M12 9v6M9 16l-3-6M15 16l3-6"/>
  </svg>
);

const ReactIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="2.5"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)"/>
  </svg>
);

const TypeScriptIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="2"/>
    <text x="6" y="17" fontSize="10" fill="white" fontWeight="bold">TS</text>
  </svg>
);

const KubernetesIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z"/>
    <circle cx="12" cy="11" r="3" fill="none" stroke="white" strokeWidth="1"/>
  </svg>
);

const DockerIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 5h2v2h-2zm-2 0h2v2h-2zm-2 0h2v2H9zm-2 0h2v2H7zm10 0h2v2h-2zm-8 2h2v2H9zm-2 0h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-6 2h2v2H9zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM3 11c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5H3z"/>
  </svg>
);

// Capability Contract icons mapping
const capabilityIcons: Record<string, React.ReactNode> = {
  "Multi-Tenant": <Users className="h-4 w-4" />,
  "Auth": <Lock className="h-4 w-4" />,
  "Observability": <Eye className="h-4 w-4" />,
  "EventBus": <Radio className="h-4 w-4" />,
  "StateStore": <Database className="h-4 w-4" />,
  "Lifecycle": <RefreshCw className="h-4 w-4" />,
};

export default function BrixPage() {
  const t = useTranslations("Brix");
  const locale = useLocale();

  return (
    <>
      <Navbar01 />
      <main className="pt-16 xs:pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="min-h-[60vh] w-full flex items-center justify-center px-6 py-20">
          <div className="max-w-screen-xl w-full text-center">
            <Badge className="rounded-full py-1 border-none mb-6">
              {t("badge")}
            </Badge>
            <div className="flex justify-center mb-8">
              <img src="/brix/logo.png" alt="Brix Logo" className="h-24 w-auto" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t("title")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t("subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://github.com/brix-kit-dev/brix" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-full text-base">
                  GitHub <ArrowUpRight className="!h-5 !w-5" />
                </Button>
              </a>
              <Link href={`/${locale}#solution`}>
                <Button variant="outline" size="lg" className="rounded-full text-base shadow-none">
                  <ArrowLeft className="!h-5 !w-5" /> {t("back")}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Plugin-Driven Platform Section */}
        <section className="w-full bg-accent/30 px-6 py-20">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t("pluginDriven.title")}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              {t("pluginDriven.desc")}
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{t("pluginDriven.problems.title")}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {t("pluginDriven.problems.p1")}</li>
                  <li>• {t("pluginDriven.problems.p2")}</li>
                  <li>• {t("pluginDriven.problems.p3")}</li>
                  <li>• {t("pluginDriven.problems.p4")}</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{t("pluginDriven.plugins.title")}</h3>
                <div className="flex flex-wrap gap-2">
                  {["Multi-Tenant", "Auth", "Observability", "EventBus", "StateStore", "Lifecycle"].map((plugin) => (
                    <Badge key={plugin} variant="secondary" className="text-sm py-1.5 px-3 flex items-center gap-1.5">
                      {capabilityIcons[plugin]}
                      {plugin}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground">{t("pluginDriven.plugins.desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section className="w-full px-6 py-20">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t("architecture.title")}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              {t("architecture.desc")}
            </p>
            <div className="mb-12 flex justify-center">
              <img 
                src="/brix/Brix Platform Architecture.png" 
                alt="Brix Platform Architecture" 
                className="w-full max-w-4xl rounded-xl shadow-lg"
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-accent/30 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3">{t(`architecture.layer${i}.title`)}</h3>
                  <p className="text-muted-foreground">{t(`architecture.layer${i}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="w-full px-6 py-20">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t("techStack.title")}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              {t("techStack.desc")}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-accent/30 rounded-xl p-6">
                <Server className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs py-1.5 px-2.5 bg-[#6DB33F]/10 border-[#6DB33F]/30 text-[#6DB33F] dark:text-[#8BD33F] flex items-center gap-1.5">
                    <SpringBootIcon />Spring Boot
                  </Badge>
                  <Badge variant="outline" className="text-xs py-1.5 px-2.5 bg-[#336791]/10 border-[#336791]/30 text-[#336791] dark:text-[#5797C1] flex items-center gap-1.5">
                    <PostgresIcon />PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="text-xs py-1.5 px-2.5 bg-[#DC382D]/10 border-[#DC382D]/30 text-[#DC382D] dark:text-[#FC584D] flex items-center gap-1.5">
                    <RedisIcon />Redis
                  </Badge>
                  <Badge variant="outline" className="text-xs py-1.5 px-2.5 bg-[#231F20]/10 border-[#231F20]/30 text-[#231F20] dark:text-white flex items-center gap-1.5">
                    <KafkaIcon />Kafka
                  </Badge>
                </div>
              </div>
              <div className="bg-accent/30 rounded-xl p-6">
                <Monitor className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs py-1.5 px-2.5 bg-[#61DAFB]/10 border-[#61DAFB]/30 text-[#087EA4] dark:text-[#61DAFB] flex items-center gap-1.5">
                    <ReactIcon />React
                  </Badge>
                  <Badge variant="outline" className="text-xs py-1.5 px-2.5 bg-[#3178C6]/10 border-[#3178C6]/30 text-[#3178C6] dark:text-[#5198E6] flex items-center gap-1.5">
                    <TypeScriptIcon />TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs py-1.5 px-2.5 bg-[#1A73C7]/10 border-[#1A73C7]/30 text-[#1A73C7] dark:text-[#4A93E7] flex items-center gap-1.5">
                    <Layers className="h-4 w-4" />Module Federation
                  </Badge>
                </div>
              </div>
              <div className="bg-accent/30 rounded-xl p-6">
                <Activity className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-4">Observability</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs py-1.5 px-2.5 bg-[#425CC7]/10 border-[#425CC7]/30 text-[#425CC7] dark:text-[#627CE7] flex items-center gap-1.5">
                    <Eye className="h-4 w-4" />OpenTelemetry
                  </Badge>
                  <Badge variant="outline" className="text-xs py-1.5 px-2.5 bg-[#E6522C]/10 border-[#E6522C]/30 text-[#E6522C] dark:text-[#FF724C] flex items-center gap-1.5">
                    <Activity className="h-4 w-4" />Prometheus
                  </Badge>
                  <Badge variant="outline" className="text-xs py-1.5 px-2.5 bg-[#F46800]/10 border-[#F46800]/30 text-[#F46800] dark:text-[#FF8820] flex items-center gap-1.5">
                    <Monitor className="h-4 w-4" />Grafana
                  </Badge>
                </div>
              </div>
              <div className="bg-accent/30 rounded-xl p-6">
                <Cloud className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-4">Infrastructure</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs py-1.5 px-2.5 bg-[#326CE5]/10 border-[#326CE5]/30 text-[#326CE5] dark:text-[#528EFF] flex items-center gap-1.5">
                    <KubernetesIcon />Kubernetes
                  </Badge>
                  <Badge variant="outline" className="text-xs py-1.5 px-2.5 bg-[#2496ED]/10 border-[#2496ED]/30 text-[#2496ED] dark:text-[#44B6FF] flex items-center gap-1.5">
                    <DockerIcon />Docker
                  </Badge>
                  <Badge variant="outline" className="text-xs py-1.5 px-2.5 bg-[#0F1689]/10 border-[#0F1689]/30 text-[#0F1689] dark:text-[#4F56C9] flex items-center gap-1.5">
                    <Box className="h-4 w-4" />Helm
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full-Stack Plugin Architecture */}
        <section className="w-full bg-accent/30 px-6 py-20">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t("fullStack.title")}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              {t("fullStack.desc")}
            </p>
            <div className="mb-12 flex justify-center">
              <img 
                src="/brix/Development Model.png" 
                alt="Development Model" 
                className="w-full max-w-4xl rounded-xl shadow-lg"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">{t("fullStack.components.title")}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileCode className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">{t("fullStack.components.api")}</p>
                      <p className="text-sm text-muted-foreground">{t("fullStack.components.apiDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">{t("fullStack.components.core")}</p>
                      <p className="text-sm text-muted-foreground">{t("fullStack.components.coreDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Server className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">{t("fullStack.components.server")}</p>
                      <p className="text-sm text-muted-foreground">{t("fullStack.components.serverDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <GitBranch className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">{t("fullStack.components.shared")}</p>
                      <p className="text-sm text-muted-foreground">{t("fullStack.components.sharedDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Monitor className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">{t("fullStack.components.ui")}</p>
                      <p className="text-sm text-muted-foreground">{t("fullStack.components.uiDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{t("fullStack.benefits.title")}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t("fullStack.benefits.b1")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t("fullStack.benefits.b2")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t("fullStack.benefits.b3")}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t("fullStack.benefits.b4")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <section className="w-full px-6 py-20">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t("ecosystem.title")}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              {t("ecosystem.desc")}
            </p>
            <div className="mb-12 flex justify-center">
              <img 
                src="/brix/Ecosystem Architecture.png" 
                alt="Ecosystem Architecture" 
                className="w-full max-w-4xl rounded-xl shadow-lg"
              />
            </div>
            
            {/* Commercial Layer Hierarchy */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">{t("ecosystem.commercial.title")}</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6 border border-primary/30">
                  <div className="absolute -top-3 left-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    {t("ecosystem.commercial.l1")}
                  </div>
                  <div className="flex items-center gap-3 mb-3 mt-2">
                    <Building className="h-8 w-8 text-primary" />
                    <h4 className="font-semibold">{t("ecosystem.commercial.platform")}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{t("ecosystem.commercial.platformDesc")}</p>
                </div>
                <div className="relative bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-xl p-6 border border-blue-500/30">
                  <div className="absolute -top-3 left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {t("ecosystem.commercial.l2")}
                  </div>
                  <div className="flex items-center gap-3 mb-3 mt-2">
                    <Package className="h-8 w-8 text-blue-500" />
                    <h4 className="font-semibold">{t("ecosystem.commercial.solution")}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{t("ecosystem.commercial.solutionDesc")}</p>
                </div>
                <div className="relative bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-xl p-6 border border-green-500/30">
                  <div className="absolute -top-3 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {t("ecosystem.commercial.l3")}
                  </div>
                  <div className="flex items-center gap-3 mb-3 mt-2">
                    <Boxes className="h-8 w-8 text-green-500" />
                    <h4 className="font-semibold">{t("ecosystem.commercial.bundle")}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{t("ecosystem.commercial.bundleDesc")}</p>
                </div>
                <div className="relative bg-gradient-to-br from-orange-500/20 to-orange-500/5 rounded-xl p-6 border border-orange-500/30">
                  <div className="absolute -top-3 left-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    {t("ecosystem.commercial.l4")}
                  </div>
                  <div className="flex items-center gap-3 mb-3 mt-2">
                    <Puzzle className="h-8 w-8 text-orange-500" />
                    <h4 className="font-semibold">{t("ecosystem.commercial.plugin")}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{t("ecosystem.commercial.pluginDesc")}</p>
                </div>
              </div>
            </div>

            {/* Ecosystem Categories */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-accent/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{t("ecosystem.core.title")}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{t("ecosystem.core.desc")}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs flex items-center gap-1">
                    <Users className="h-3 w-3" /> User
                  </Badge>
                  <Badge variant="secondary" className="text-xs flex items-center gap-1">
                    <Building className="h-3 w-3" /> Tenant
                  </Badge>
                  <Badge variant="secondary" className="text-xs flex items-center gap-1">
                    <CreditCard className="h-3 w-3" /> Billing
                  </Badge>
                  <Badge variant="secondary" className="text-xs flex items-center gap-1">
                    <FileText className="h-3 w-3" /> Report
                  </Badge>
                </div>
              </div>
              <div className="bg-accent/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold">{t("ecosystem.solutions.title")}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{t("ecosystem.solutions.desc")}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs flex items-center gap-1">
                    <Heart className="h-3 w-3" /> Healthcare
                  </Badge>
                  <Badge variant="secondary" className="text-xs flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> Finance
                  </Badge>
                  <Badge variant="secondary" className="text-xs flex items-center gap-1">
                    <ShoppingCart className="h-3 w-3" /> Retail
                  </Badge>
                </div>
              </div>
              <div className="bg-accent/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Handshake className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold">{t("ecosystem.partner.title")}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{t("ecosystem.partner.desc")}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs flex items-center gap-1">
                    <BarChart className="h-3 w-3" /> Analytics
                  </Badge>
                  <Badge variant="secondary" className="text-xs flex items-center gap-1">
                    <LinkIcon className="h-3 w-3" /> Integration
                  </Badge>
                  <Badge variant="secondary" className="text-xs flex items-center gap-1">
                    <Zap className="h-3 w-3" /> Automation
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Modes Section */}
        <section className="w-full bg-accent/30 px-6 py-20">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t("modes.title")}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              {t("modes.desc")}
            </p>
            <div className="mb-12 flex justify-center">
              <img 
                src="/brix/Deployment Modes.png" 
                alt="Deployment Modes" 
                className="w-full max-w-4xl rounded-xl shadow-lg"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{t("modes.standalone.title")}</h3>
                <p className="text-muted-foreground">{t("modes.standalone.desc")}</p>
              </div>
              <div className="bg-background rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{t("modes.embedded.title")}</h3>
                <p className="text-muted-foreground">{t("modes.embedded.desc")}</p>
              </div>
              <div className="bg-background rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{t("modes.sdk.title")}</h3>
                <p className="text-muted-foreground">{t("modes.sdk.desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Experience */}
        <section className="w-full px-6 py-20">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t("devex.title")}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              {t("devex.desc")}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-accent/30 rounded-xl p-6">
                <Package className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">{t("devex.sdk.title")}</h3>
                <p className="text-muted-foreground text-sm">{t("devex.sdk.desc")}</p>
              </div>
              <div className="bg-accent/30 rounded-xl p-6">
                <Terminal className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">{t("devex.cli.title")}</h3>
                <p className="text-muted-foreground text-sm">{t("devex.cli.desc")}</p>
              </div>
              <div className="bg-accent/30 rounded-xl p-6">
                <Shield className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">{t("devex.guard.title")}</h3>
                <p className="text-muted-foreground text-sm">{t("devex.guard.desc")}</p>
              </div>
              <div className="bg-accent/30 rounded-xl p-6">
                <Palette className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">{t("devex.tokens.title")}</h3>
                <p className="text-muted-foreground text-sm">{t("devex.tokens.desc")}</p>
              </div>
              <div className="bg-accent/30 rounded-xl p-6">
                <Zap className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">{t("devex.hotReload.title")}</h3>
                <p className="text-muted-foreground text-sm">{t("devex.hotReload.desc")}</p>
              </div>
              <div className="bg-accent/30 rounded-xl p-6">
                <CheckCircle2 className="h-8 w-8 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">{t("devex.typeSafe.title")}</h3>
                <p className="text-muted-foreground text-sm">{t("devex.typeSafe.desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Value */}
        <section className="w-full bg-accent/30 px-6 py-20">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t("value.title")}</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              {t("value.desc")}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-background rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{t("value.platform.title")}</h3>
                <p className="text-muted-foreground">{t("value.platform.desc")}</p>
              </div>
              <div className="bg-background rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{t("value.solutions.title")}</h3>
                <p className="text-muted-foreground">{t("value.solutions.desc")}</p>
              </div>
              <div className="bg-background rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{t("value.ecosystem.title")}</h3>
                <p className="text-muted-foreground">{t("value.ecosystem.desc")}</p>
              </div>
              <div className="bg-background rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{t("value.separation.title")}</h3>
                <p className="text-muted-foreground">{t("value.separation.desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="w-full bg-primary text-primary-foreground px-6 py-20">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t("vision.title")}</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              {t("vision.desc")}
            </p>
            <a href="https://github.com/brix-kit-dev/brix" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="rounded-full text-base">
                {t("vision.cta")} <ArrowUpRight className="!h-5 !w-5" />
              </Button>
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
