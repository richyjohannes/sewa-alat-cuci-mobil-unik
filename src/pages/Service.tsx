
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check, Upload, X } from "lucide-react";

// Komponen layout
import Layout from '../components/Layout';

const ServiceCard = ({ title, description, price, imageUrl }: { title: string; description: string; price: string; imageUrl: string }) => {
  const navigate = useNavigate();
  
  const handleRequestService = () => {
    // Format pesan WhatsApp
    const message = encodeURIComponent(`Halo, saya tertarik dengan layanan service "${title}" dengan harga ${price}. Mohon informasi lebih lanjut.`);
    
    // Buka WhatsApp dengan pesan yang sudah disiapkan
    window.open(`https://wa.me/6281573635143?text=${message}`, '_blank');
  };
  
  return (
    <Card className="w-full h-full overflow-hidden group card-hover">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
        <CardDescription className="text-blue-medium/80 font-medium">
          {price}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleRequestService} className="w-full btn-primary">
          Order Service
        </Button>
      </CardFooter>
    </Card>
  );
};

const Service = () => {
  const [name, setName] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Periksa ukuran file (maksimal 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File terlalu besar",
          description: "Ukuran file maksimal 5MB",
          variant: "destructive",
        });
        return;
      }
      
      setSelectedFile(file);
      
      // Buat preview URL untuk gambar yang dipilih
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (typeof fileReader.result === 'string') {
          setPreviewUrl(fileReader.result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validasi form
    if (!name || !deviceName || !issueDescription || !phone) {
      toast({
        title: "Form tidak lengkap",
        description: "Mohon lengkapi semua field yang diperlukan",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Format pesan untuk WhatsApp
      let message = `*Permintaan Service Baru*\n\n`;
      message += `*Nama:* ${name}\n`;
      message += `*Nama Alat:* ${deviceName}\n`;
      message += `*Deskripsi Masalah:* ${issueDescription}\n`;
      message += `*No. Telp:* ${phone}\n`;
      
      // Tambahkan informasi tentang foto jika ada
      if (selectedFile) {
        message += `\n*Foto Alat:* Saya juga akan mengirimkan foto segera setelah chat ini.\n`;
      }
      
      // Encode pesan untuk URL WhatsApp
      const encodedMessage = encodeURIComponent(message);
      
      // Buka WhatsApp dengan pesan yang sudah disiapkan
      window.open(`https://wa.me/6281573635143?text=${encodedMessage}`, '_blank');
      
      // Tampilkan instruksi jika ada foto
      if (selectedFile) {
        setTimeout(() => {
          toast({
            title: "Lampirkan Foto",
            description: "Silakan lampirkan foto yang telah Anda pilih secara manual di WhatsApp yang baru saja terbuka.",
            duration: 6000,
          });
        }, 500);
      }
      
      // Reset form
      setName('');
      setDeviceName('');
      setIssueDescription('');
      setPhone('');
      setSelectedFile(null);
      setPreviewUrl(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      
      toast({
        title: "Permintaan service berhasil dikirim",
        description: "Admin kami akan segera menghubungi Anda",
      });
    } catch (error) {
      console.error("Error mengirim formulir:", error);
      toast({
        title: "Terjadi kesalahan",
        description: "Gagal mengirim formulir, silakan coba lagi",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Layanan service yang tersedia
  const services = [
    {
      id: 1,
      title: "Penggantian Oli Mesin",
      description: "Perawatan rutin dengan penggantian oli sesuai jenis mesin alat Anda untuk memastikan kinerja optimal dan memperpanjang umur mesin.",
      price: "Rp 150.000 - Rp 300.000",
      imageUrl: "https://images.unsplash.com/photo-1580745089072-62e2b66dd9e8?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Perbaikan Komponen Elektrik",
      description: "Perbaikan sistem elektrik pada alat cuci mobil seperti motor listrik, kabel, dan panel kontrol yang rusak atau tidak berfungsi.",
      price: "Rp 200.000 - Rp 500.000",
      imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Pembersihan & Kalibrasi Nozzle",
      description: "Pembersihan menyeluruh pada nozzle dan komponen penyemprot, serta kalibrasi tekanan air untuk hasil optimal.",
      price: "Rp 100.000 - Rp 250.000",
      imageUrl: "https://images.unsplash.com/photo-1516822669470-73d1cc2aae89?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 4,
      title: "Perawatan Pompa Tekanan Tinggi",
      description: "Service lengkap untuk pompa tekanan tinggi, termasuk pembersihan, penggantian seal, dan optimasi kinerja pompa.",
      price: "Rp 300.000 - Rp 750.000",
      imageUrl: "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <Layout>
      <div className="pt-32 pb-16 md:pt-36 md:pb-24">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-dark text-center mb-3">Layanan Service</h1>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Kami menyediakan layanan perawatan dan perbaikan untuk memastikan peralatan cuci mobil Anda selalu dalam kondisi prima
          </p>
          
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="services">Layanan Tersedia</TabsTrigger>
              <TabsTrigger value="custom">Custom Request</TabsTrigger>
            </TabsList>
            
            <TabsContent value="services" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                  <ServiceCard 
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    price={service.price}
                    imageUrl={service.imageUrl}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="custom" className="mt-4">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Request Service Custom</CardTitle>
                  <CardDescription>
                    Isi form di bawah ini untuk layanan service yang tidak tercantum, dan tim kami akan segera menghubungi Anda.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Masukkan nama lengkap Anda" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="device">Nama Alat</Label>
                      <Input 
                        id="device" 
                        value={deviceName} 
                        onChange={(e) => setDeviceName(e.target.value)} 
                        placeholder="Masukkan nama atau tipe alat" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="issue">Deskripsi Kerusakan/Masalah</Label>
                      <Textarea 
                        id="issue" 
                        value={issueDescription} 
                        onChange={(e) => setIssueDescription(e.target.value)} 
                        placeholder="Jelaskan detail kerusakan atau masalah yang dialami" 
                        required 
                        rows={4}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor Telepon</Label>
                      <Input 
                        id="phone" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="Masukkan nomor telepon/WhatsApp" 
                        type="tel" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="photo">Foto Alat/Kerusakan (Opsional)</Label>
                      <div className="mt-1 flex items-center">
                        <input
                          type="file"
                          id="photo"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept="image/*"
                          className="hidden"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => fileInputRef.current?.click()}
                          className="flex items-center space-x-2"
                        >
                          <Upload size={16} />
                          <span>Upload Foto</span>
                        </Button>
                        
                        {previewUrl && (
                          <div className="ml-4 relative">
                            <div className="w-16 h-16 rounded-md overflow-hidden border">
                              <img
                                src={previewUrl}
                                alt="Preview"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={handleRemoveFile}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Format: JPEG, PNG, atau GIF. Maks. 5MB.
                      </p>
                      {selectedFile && (
                        <p className="text-xs text-blue-600 mt-1">
                          *Foto akan dikirimkan melalui WhatsApp. Silakan lampirkan foto secara manual setelah formulir terkirim.
                        </p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full btn-primary mt-4" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Mengirim...
                        </span>
                      ) : (
                        "Kirim Permintaan Service"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Service;
