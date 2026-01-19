import React from 'react';
import { Scale, FileWarning, Mail, ShieldAlert, FileCheck, Ban } from 'lucide-react';

const DMCAPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-28 overflow-hidden text-center border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-neon-purple/5 blur-[120px] rounded-full -z-10" />
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-purple/30 bg-neon-purple/10 text-neon-purple font-mono text-xs uppercase tracking-wider mb-8">
          <Scale size={12} /> Intellectual Property Protocol
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
          DMCA <span className="text-white">Policy</span>
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          DealHunter AI respects the intellectual property rights of others. We respond expeditiously to valid notices of alleged copyright infringement.
        </p>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Introduction Card */}
          <div className="bg-bg-secondary/40 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-neon-purple" />
             <p className="text-text-secondary text-lg leading-relaxed">
               In accordance with the Digital Millennium Copyright Act ("DMCA"), we have adopted the following policy toward copyright infringement. We reserve the right to (1) block access to or remove material that we believe in good faith to be copyrighted material that has been illegally copied and distributed by any of our advertisers, affiliates, content providers, members or users and (2) remove and discontinue service to repeat offenders.
             </p>
          </div>

          {/* Reporting Procedure */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-bg-secondary border border-white/10 flex items-center justify-center">
                <FileWarning className="w-5 h-5 text-neon-cyan" />
              </div>
              <h2 className="font-display text-3xl font-bold text-white">Filing a Notification of Infringement</h2>
            </div>

            <div className="space-y-6">
              <p className="text-text-secondary mb-4">
                If you believe that material or content residing on or accessible through DealHunter AI infringes a copyright, please send a notice of copyright infringement containing the following information to the Designated Agent listed below:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                   "A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright.",
                   "Identification of the copyrighted work claimed to have been infringed.",
                   "Identification of the material that is claimed to be infringing, with enough detail to locate it.",
                   "Information reasonably sufficient to permit us to contact the complaining party (Address, Phone, Email).",
                   "A statement that the complaining party has a good faith belief that use of the material is not authorized.",
                   "A statement that the information in the notification is accurate, and under penalty of perjury."
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 p-5 rounded-xl bg-bg-primary/50 border border-white/5 hover:border-white/20 transition-colors">
                      <div className="font-mono text-neon-cyan/50 text-sm">0{i+1}</div>
                      <p className="text-sm text-text-secondary leading-relaxed">{item}</p>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          {/* Counter Notification */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-bg-secondary border border-white/10 flex items-center justify-center">
                <FileCheck className="w-5 h-5 text-status-success" />
              </div>
              <h2 className="font-display text-3xl font-bold text-white">Counter-Notification Procedure</h2>
            </div>
            
            <div className="bg-bg-secondary/20 rounded-2xl p-8 border border-white/5">
              <p className="text-text-secondary leading-relaxed mb-6">
                If you believe that material that was removed or to which access was disabled is not infringing, or that you have the authorization from the copyright owner, you may send a counter-notification containing the following information to the Designated Agent:
              </p>
              <ul className="space-y-3 list-disc list-inside text-text-tertiary">
                <li>Your physical or electronic signature.</li>
                <li>Identification of the material that has been removed or to which access has been disabled.</li>
                <li>A statement that you have a good faith belief that the material was removed or disabled as a result of mistake or a misidentification.</li>
                <li>Your name, address, telephone number, and e-mail address, and a statement that you consent to the jurisdiction of the federal court.</li>
              </ul>
            </div>
          </div>

          {/* Repeat Infringers */}
          <div className="flex gap-6 p-6 rounded-2xl bg-status-error/5 border border-status-error/20">
             <div className="shrink-0">
               <Ban className="w-8 h-8 text-status-error" />
             </div>
             <div>
                <h3 className="font-bold text-white text-lg mb-2">Repeat Infringer Policy</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                   In accordance with the DMCA and other applicable law, DealHunter AI has adopted a policy of terminating, in appropriate circumstances and at our sole discretion, users who are deemed to be repeat infringers. We may also at our sole discretion limit access to the Service for any users who infringe any intellectual property rights of others.
                </p>
             </div>
          </div>

          {/* Designated Agent Contact */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-neon-cyan/20 p-8 md:p-12 text-center">
             <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
             
             <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-full bg-bg-primary flex items-center justify-center border border-neon-cyan shadow-[0_0_20px_rgba(0,240,255,0.2)] mb-6">
                   <ShieldAlert className="w-8 h-8 text-neon-cyan" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-white mb-2">Designated Copyright Agent</h3>
                <p className="text-text-secondary mb-8">Please send all notifications to:</p>
                
                <div className="inline-block text-left bg-bg-primary/80 backdrop-blur border border-white/10 rounded-xl p-6 min-w-[300px]">
                   <p className="font-bold text-white mb-1">DealHunter AI Legal Dept.</p>
                   <p className="text-text-secondary font-mono text-sm mb-4">Attn: Copyright Agent</p>
                   
                   <div className="space-y-2 text-sm text-text-tertiary">
                      <p>8000 Innovation Drive, Suite 404</p>
                      <p>San Francisco, CA 94103</p>
                      <p>United States</p>
                      <div className="h-px bg-white/10 my-3" />
                      <div className="flex items-center gap-2 text-neon-cyan">
                         <Mail size={14} />
                         <a href="mailto:dmca@dealhunter.ai" className="hover:underline">dmca@dealhunter.ai</a>
                      </div>
                      <p className="text-xs mt-2">Phone: +1 (555) 012-3456</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default DMCAPage;