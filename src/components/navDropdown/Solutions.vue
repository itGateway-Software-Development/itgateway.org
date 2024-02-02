<template>
<div class="dropdown">
        <div class="content d-flex gap-5">
            <ul class="pt-5 pe-5  multi">
              <li @mouseover="dropdownContent = 'cloud'" :class="{ active: dropdownContent == 'cloud'}">
                Cloud
              </li>
              <li @mouseover="dropdownContent = 'software'" :class="{ active: dropdownContent == 'software'}">
                Software
              </li>
              <li @mouseover="dropdownContent = 'datacenter'" :class="{ active: dropdownContent == 'datacenter'}">
                Datacenter
              </li>
              <li @mouseover="dropdownContent = 'security'" :class="{ active: dropdownContent == 'security'}">
                Security
              </li>
              <li @mouseover="dropdownContent = 'engineering'" :class="{ active: dropdownContent == 'engineering'}">
                Engineering
              </li>
              <li @mouseover="dropdownContent = 'education'" :class="{ active: dropdownContent == 'education'}">
                Education
              </li>
              <li @mouseover="dropdownContent = 'outsource'" :class="{ active: dropdownContent == 'outsource'}">
                Outsourcing
              </li>
              <li @mouseover="dropdownContent = 'licensing'" :class="{ active: dropdownContent == 'licensing'}">
                Licensing
              </li>
            </ul>
            <div class="solution pt-5">
              <div v-if="dropdownContent == 'cloud'">
                  <h5>itGateway Cloud</h5>
                  <p class="mb-5">
                    Running your cloud requirements on itGateway Cloud Infracture.
                  </p>
                  <h5>Multicloud</h5>
                  <p class="mb-5">
                    Build the modern cloud infrastructure on Amazon AWS, Microsoft Azure, Google Cloud Platform & Other.​
                  </p>
                  <h5>Managed Cloud Services​</h5>
                  <p class="mb-5">
                    Run your resources on any Cloud and managed by itGateway Cloud Team.​
                  </p>
              </div>

              <div v-if="dropdownContent == 'software'">
                <h5>Web Development</h5>
                <p class="mb-5">
                  Growth your business with modern website & web applications.
                </p>

                <h5>Application Development​</h5>
                <p class="mb-5">
                  Building & Integrating for your Enterprise Application such as ERP & POS system.​
                </p>

                <h5>Learning Management System​</h5>
                <p class="mb-5">
                  Accelerate your education channel with our LMS platform.​
                </p>
              </div>

              <div v-if="dropdownContent == 'software-development'">
                <h5>Web Development</h5>
                <p class="mb-5">
                  Growth your business with modern website & web applications.
                </p>

                <h5>Application Development​</h5>
                <p class="mb-5">
                  Building & Integrating for your Enterprise Application such as ERP & POS system.​
                </p>

                <h5>Learning Management System​</h5>
                <p class="mb-5">
                  Accelerate your education channel with our LMS platform.​
                </p>
              </div>

              <div v-if="dropdownContent == 'datacenter'">
                <h5>Virtualization​</h5>
                <p class="mb-5">
                  Providing the virtualization solutions with Vmware, Promox & Microsoft​
                </p>

                <h5>SD-WAN​</h5>
                <p class="mb-5">
                  Setup your business applications & network using centralized management.​
                </p>

                <h5>DC/DR Solutions​</h5>
                <p class="mb-5">
                  Backup and replicate your datacenter with proactive prevention. ​
                </p>
              </div>

              <div v-if="dropdownContent == 'security'">
                <h5>Cyber Security​</h5>
                <p class="mb-5">
                  Securing tomorrow, today: your shield in the digital realm.​
                </p>

                <h5>Network Security​</h5>
                <p class="mb-5">
                  Empowering security with the latest technologies.​
                </p>

                <h5>Endpoint Security​</h5>
                <p class="mb-5">
                  Protect the enduser to provide the secure digital workspace.​
                </p>
              </div>

              <div v-if="dropdownContent == 'engineering'">
                <h5>IoT & Automation​</h5>
                <p class="mb-5">
                  Any where, any time access and automate the process.​
                </p>

                <h5>Video Surveillance System​</h5>
                <p class="mb-5">
                  Protect your place with the digital devices and technologies.​
                </p>

                <h5>Access Control System​</h5>
                <p class="mb-5">
                  Securing your building or office with the latest security devices.​
                </p>
              </div>

              <div v-if="dropdownContent == 'education'">
                <h5>Cooperate Training​</h5>
                <p class="mb-5">
                  Growth you team or group with our training program.​
                </p>

                <h5>Online Training​</h5>
                <p class="mb-5">
                  Real-Time trainings can access & learn from anywhere.​
                </p>

                <h5>On-Class Training​</h5>
                <p class="mb-5">
                  Accelerate you skills with the face-to-face training and classes.​
                </p>
              </div>

              <div v-if="dropdownContent == 'outsource'">
                <h5>Managed Services​</h5>
                <p class="mb-5">
                  Securing tomorrow, today: your shield in the digital realm.​
                </p>

                <h5>IT Outsource Services​</h5>
                <p class="mb-5">
                  Empowering security with the latest technologies.​
                </p>

                <h5>Maintenance Services​</h5>
                <p class="mb-5">
                  Protect the enduser to provide the secure digital workspace.​
                </p>
              </div>

              <div v-if="dropdownContent == 'licensing'">
                <h5>Digital Platform License​</h5>
                <p class="mb-5">
                  SecProviding the license for digital workspace, endpoint security and other. ​
                </p>

                <h5>Operating System License​</h5>
                <p class="mb-5">
                  Microsoft, Enterprise Linux, Virtualization and other licensing.​
                </p>

                <h5>Hardware Supports​</h5>
                <p class="mb-5">
                  Access your hardware resource license such as Cisco, Fortinet, Paloalto and more.​
                </p>
              </div>
            </div>
        </div>
      </div>
</template>

<script>
export default {
  props: ['dropdownContent'],

  }
</script>