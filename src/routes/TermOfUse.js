import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./TermOfUse.css"

function TermOfUse() {
    return (
        <>
            <Navbar />
            <div className="terms-content">
                <h1>Terms of Service of 8eight Mobile Detailing</h1>
                <p>This document governs</p>
                <ul>
                    <li>The use of our website, and,</li>
                    <li>Any other related agreement or legal relationship with us in a legally binding way.</li>
                </ul>
                <p><strong>You must read this document carefully.</strong></p><br/>

                <h2>What you should know at a glance</h2>
                <p>Please note that some provisions may only apply to certain categories of users. In particular, certain provisions may only apply to consumers or to those users that do not qualify as consumers. Such limitations are always explicitly mentioned within each affected clause. In the absence of any such mention, clauses apply to all users.</p><br/>
               
                <h2>TERMS OF USE</h2>
                <p>Unless stated otherwise, the terms in this section apply generally when using our website.</p>
                <p>Specific or additional conditions may apply in certain situations and are noted in this document.</p>
                <p>By using our website, you confirm the following:</p>
                <ul>
                    <li>You are not in a country under a Canadian government embargo or designated as a "terrorist-supporting" country;</li>
                    <li>You are not on any Canadian government list of prohibited or restricted parties.</li>
                </ul><br/>
                
                <h3>Account registration</h3>
                <p>To use the service, you can register or create an account by providing complete and truthful information. You can also use the service without an account, but this might limit some features.</p>
                <p>You are responsible for keeping your login details confidential and must choose passwords that meet the highest standards of strength as allowed by our website.</p>
                <p>By registering, you agree to take full responsibility for all activities under your username and password. <br />
                You must immediately inform us using the contact details in this document if you believe your personal information, account, or login details have been violated, disclosed, or stolen.</p><br/>

                <h4>Conditions for account registration</h4>
                <p>Registration of accounts on our website is subject to the conditions outlined below. By registering, you agree to meet such conditions.</p>
                <ul>
                    <li>It is not permitted to register accounts by bots or any other automated methods;</li>
                    <li>You must register only one account, unless otherwise specified;</li>
                    <li>Your account must not be shared with other persons unless otherwise specified.</li>
                </ul><br/>

                <h4>Account termination</h4>
                <p>You can close your account and stop using our service anytime by contacting us at the contact details provided in this document.</p><br/>

                <h4>Account suspension and deletion</h4>
                <p>We reserve the right to suspend or delete your account at any time and without notice if we find it inappropriate, offensive, or in violation of these terms.</p>
                <p>Suspending or deleting accounts does not entitle you to claim for any compensation, damages, or reimbursement.</p>
                <p>The suspension or deletion of accounts due to causes attributable to you does not exempt you from paying any applicable fees or prices.</p><br/>

                <h3>Content on the website</h3>
                <p>Unless otherwise noted, all content on our website is owned or provided by us or our licensors.</p>
                <p>We do our best to ensure the content on our website complies with all laws and respects third-party rights. However, this may not always be achievable. <br />
                If you believe your rights are being infringed, without prejudice to any legal prerogatives to enforce your rights, please report any issues using the contact details provided in this document.</p><br/>

                <h4>Rights regarding content on our website - All rights reserved</h4>
                <p>We hold and reserve all intellectual property rights for all content.</p>
                <p>You may not use such content in any way that is not necessary or implied for the proper use of the service.</p>
                <p>Specifically, but without limitation, you may not copy, download, share (beyond the limits mentioned below), modify, translate, transform, publish, transmit, sell, sublicense, edit, transfer, assign to third parties, or create derivative works from the content on our website. You also cannot allow any third party to do so through your account or device, even unknowingly.</p>
                <p>Where explicitly stated, you may download, copy, and share some content from our website for personal and non-commercial use, provided you correctly implement copyright and other required attributions.</p>
                <p>Any statutory limitations or exceptions to copyright remain unaffected.</p><br/>
                
                <h3>Access to external resources</h3>
                <p>Through our website, you may access external resources provided by third parties. You acknowledge and accept that we have no control over these resources and are not responsible for their content or availability.</p>
                <p>Conditions for third-party resources, including any rights granted in their content, are governed by those third parties' terms and conditions or by applicable law.</p><br/>
               
                <h3>Acceptable use</h3>
                <p>Our website and service may only be used within the scope of what is provided for, under these terms and applicable law.</p>
                <p>You are solely responsible for ensuring your use of our website and service does not violate any laws, regulations, or third-party rights.</p>
                <p>We reserve the right to protect our interests by denying you access to our website or service, terminating contracts, and reporting any misconduct to the appropriate authorities if you are involved in or suspected of the following:</p>
                <ul>
                    <li>violating laws, regulations, or these terms;</li>
                    <li>infringing on third-party rights;</li>
                    <li>significantly impairing our legitimate interests;</li>
                    <li>offending us or any third party.</li>
                </ul><br/>
    
                <h3>Liability</h3>
                <p>We are not liable for any damages resulting from the use or inability to use our website or services, including but not limited to direct, indirect, incidental, consequential, or punitive damages, even if we have been advised of the possibility of such damages.</p>
                <p>Our total liability, whether in contract, tort (including negligence), or otherwise, shall not exceed the amount paid by you for the product or service in question.</p><br/>
                
                <h3>Changes to these terms</h3>
                <p>We reserve the right to change these terms at any time. Changes will be effective upon posting on our website. Your continued use of our website or services indicates your acceptance of the revised terms.</p><br/>
               
                <h3>Governing law and jurisdiction</h3>
                <p>These terms are governed by and construed in accordance with the laws of Canada. Any disputes arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts of <code>[country]</code>.</p>
                <p>By using our website or services, you agree to be bound by these terms.</p>
            </div>
            <Footer />
        </>
    );
}

export default TermOfUse;
